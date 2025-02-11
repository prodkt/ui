import { promises as fs } from 'node:fs';
import { readdirSync } from 'node:fs';
import path, { join } from 'node:path';

const cwd = process.cwd();
const packagesPath = join(cwd, 'packages');
const packagesDir = readdirSync(packagesPath, { withFileTypes: true });
const internalPackages = ['tailwind-config', 'typescript-config', 'shadcn-ui'];

// Get both regular packages and primitive components
const packages = packagesDir
  .filter((dir) => dir.isDirectory() && !internalPackages.includes(dir.name))
  .map((dir) => dir.name);

const primitivesPath = join(cwd, 'packages/shadcn-ui/components/ui');
const primitiveComponents = readdirSync(primitivesPath)
  .filter((file) => file.endsWith('.tsx'))
  .map((file) => file.replace('.tsx', ''));

const PUBLIC_FOLDER_BASE_PATH = 'apps/docs/public/registry';

// Add constant for primitive registry path
const PRIMITIVE_REGISTRY_PATH = 'apps/docs/public/registry/primitive';

const writeFileRecursive = async (filePath: string, data: string) => {
  const dir = path.dirname(filePath);

  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, data, 'utf-8');
};

const buildRegistry = async (pkg: string) => {
  const cwd = process.cwd();

  const packagePath = join(cwd, 'packages', pkg, 'package.json');
  const packageJson = await import(packagePath);

  const dependencies = Object.keys(packageJson.dependencies).filter(
    (dep) => !['react', 'react-dom', '@repo/shadcn-ui'].includes(dep)
  );
  const devDependencies = Object.keys(packageJson.devDependencies).filter(
    (dep) =>
      ![
        '@repo/typescript-config',
        '@repo/tailwind-config',
        '@types/react',
        '@types/react-dom',
        'typescript',
      ].includes(dep)
  );

  const contentPath = join(cwd, 'packages', pkg, 'index.tsx');
  const content = await fs.readFile(contentPath, 'utf-8');

  const registryDependencies = (
    content.match(/@\/components\/ui\/([a-z-]+)/g) || []
  )
    .map((path) => path.split('/').pop())
    .filter((name): name is string => !!name);

  const json = JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      homepage: `https://www.prodkt.cloud/${pkg}`,
      name: pkg,
      type: 'registry:ui',
      author: 'Bryan Funk <technology@prodkt.cloud>',
      registryDependencies,
      dependencies,
      devDependencies,
      files: [
        {
          type: 'registry:ui',
          path: 'index.tsx',
          content,
          target: `components/ui/prodkt-ui/${pkg}.tsx`,
        },
      ],
    },
    null,
    2
  );
  const jsonPath = join(PUBLIC_FOLDER_BASE_PATH, `${pkg}.json`);
  await writeFileRecursive(jsonPath, json);
};

const buildPrimitiveRegistry = async (componentName: string) => {
  const primitiveContentPath = join(
    cwd,
    'packages/shadcn-ui/components/ui',
    `${componentName}.tsx`
  );
  const primitiveContent = await fs.readFile(primitiveContentPath, 'utf-8');

  // Get registry dependencies (other UI components used)
  const registryDependencies = (
    primitiveContent.match(/@\/components\/ui\/([a-z-]+)/g) || []
  )
    .map((path) => path.split('/').pop())
    .filter((name): name is string => !!name);

  // Get external package dependencies, excluding internal and React dependencies
  const importLines =
    primitiveContent.match(/^import.*from.*["'].*["']/gm) || [];
  const dependencies = importLines
    .map((line) => {
      const match = line.match(/from\s+["']([^"']+)["']/);
      if (!match) return null;
      const dep = match[1];

      // Only include external package dependencies
      if (
        dep.startsWith('@radix-ui/') ||
        dep === 'react-day-picker' ||
        dep === 'date-fns' ||
        dep === 'lucide-react' ||
        (dep.startsWith('@') &&
          !dep.startsWith('@/') &&
          !dep.startsWith('@repo/'))
      ) {
        return dep;
      }
      return null;
    })
    .filter((dep): dep is string => !!dep);

  const json = JSON.stringify(
    {
      $schema: 'https://ui.shadcn.com/schema/registry.json',
      homepage: `https://www.prodkt.cloud/${componentName}`,
      name: componentName,
      type: 'registry:ui',
      author: 'Bryan Funk <technology@prodkt.cloud>',
      registryDependencies,
      dependencies: [...new Set(dependencies)],
      devDependencies: [],
      files: [
        {
          type: 'registry:ui',
          path: `${componentName}.tsx`,
          content: primitiveContent,
          target: `components/ui/${componentName}.tsx`,
        },
      ],
    },
    null,
    2
  );
  const jsonPath = join(PRIMITIVE_REGISTRY_PATH, `${componentName}.json`);
  await writeFileRecursive(jsonPath, json);
};

const main = async () => {
  // Build registry for packages
  for (const pkg of packages) {
    await buildRegistry(pkg);
  }

  // Build registry for primitive components
  for (const component of primitiveComponents) {
    await buildPrimitiveRegistry(component);
  }
};

main()
  .then(() => {
    console.log('done');
  })
  .catch((err) => {
    console.error(err);
  });
