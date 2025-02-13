import { promises as fs } from 'node:fs';
import path, { join } from 'node:path';

const cwd = process.cwd();
// const packagesPath = join(cwd, 'packages');
// const packagesDir = readdirSync(packagesPath, { withFileTypes: true });
// const internalPackages = ['tailwind-config', 'typescript-config', 'logos'];

// const logoPackages = packagesDir
//   .filter((dir) => dir.isDirectory() && !internalPackages.includes(dir.name))
//   .map((dir) => dir.name);

// const logosPath = join(cwd, 'packages/logos');
// const logoComponents = readdirSync(logosPath)
//   .filter((file) => file.endsWith('.tsx'))
//   .map((file) => file.replace('.tsx', ''));

// const PUBLIC_FOLDER_BASE_PATH = 'apps/docs/public/registry';

// Add constant for primitive registry path
const LOGO_REGISTRY_PATH = 'apps/docs/public/registry/logos';

const writeFileRecursive = async (filePath: string, data: string) => {
  const dir = path.dirname(filePath);

  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, data, 'utf-8');
};

export const buildLogoRegistry = async (componentName: string) => {
  //   const packagePath = join(cwd, 'packages/logos/package.json');
  //   const packageJson = await import(packagePath);

  const logoContentPath = join(cwd, 'packages/logos', `${componentName}.tsx`);
  const logoContent = await fs.readFile(logoContentPath, 'utf-8');

  // Get registry dependencies (other UI components used)
  const registryDependencies = (
    logoContent.match(/from ['"]\.\/(logo[^'"]+)['"]/g) || []
  )
    .map((path) => path.match(/\.\/([^'"]+)/)?.[1])
    .filter((name): name is string => !!name);

  // Get external package dependencies, excluding internal and React dependencies
  const importLines = logoContent.match(/^import.*from.*["'].*["']/gm) || [];
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
      registryDependencies: [...new Set(registryDependencies)],
      dependencies: [...new Set(dependencies)],
      devDependencies: [],
      files: [
        {
          type: 'registry:ui',
          path: `${componentName}.tsx`,
          content: logoContent,
          target: `components/ui/logos/${componentName}.tsx`,
        },
      ],
    },
    null,
    2
  );
  const jsonPath = join(LOGO_REGISTRY_PATH, `${componentName}.json`);
  await writeFileRecursive(jsonPath, json);
};
