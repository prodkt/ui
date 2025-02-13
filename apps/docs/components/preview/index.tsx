import {
  SandboxCodeEditor,
  SandboxConsole,
  SandboxFileExplorer,
  SandboxLayout,
  SandboxPreview,
  type SandboxProvider,
  SandboxTabs,
  SandboxTabsContent,
  SandboxTabsList,
  SandboxTabsTrigger,
} from '@repo/sandbox';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@repo/shadcn-ui/components/ui/resizable';
import { AppWindowIcon, CodeIcon, TerminalIcon } from 'lucide-react';
import type { ComponentProps } from 'react';
import { content } from './content';
import { PreviewProvider } from './provider';
import { tsconfig } from './tsconfig';
import { utils } from './utils';

type PreviewProps = {
  name: string;
  code: string;
  shadcn?: boolean;
  logos?: boolean;
  dependencies?: Record<string, string>;
};

const parseDependencyVersion = (dependency: string) => {
  const [name, version] =
    (dependency as string).match(/^(.+?)(?:@(.+))?$/)?.slice(1) ?? [];

  return { name, version: version ?? 'latest' };
};

const parseContent = (content: string) => {
  return content.replace(/@\/registry\/new-york\/ui\//g, '@/components/ui/');
};

export const Preview = async ({
  name,
  code,
  dependencies: demoDependencies,
  shadcn,
  logos,
}: PreviewProps) => {
  let registry: {
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    registryDependencies?: Record<string, string>;
    files?: { content: string }[];
  };

  if (shadcn) {
    registry = await import(`../../public/registry/primitive/${name}.json`);
  } else if (logos) {
    registry = await import(`../../public/registry/logos/${name}.json`);
  } else {
    registry = await import(`../../public/registry/${name}.json`);
  }

  const dependencies: Record<string, string> = {};
  const devDependencies: Record<string, string> = {};

  const files: ComponentProps<typeof SandboxProvider>['files'] = {
    '/App.tsx': code,
    '/tsconfig.json': tsconfig,
    '/lib/utils.ts': utils,
    '/lib/content.ts': content,
  };

  const parseLogosComponents = async (str: string) => {
    const parsedString = parseContent(str);

    const matches = parsedString.match(
      /from ['"]@\/components\/ui\/logos\/([^'"]+)['"]/g
    );

    if (matches) {
      const components = [
        ...new Set(
          matches.map((m) =>
            m
              .replace(/from ['"]@\/components\/ui\/logos\//, '')
              .replace(/['"]$/, '')
          )
        ),
      ];

      for (const component of components) {
        try {
          const mod = (await import(
            `../../public/registry/logos/${component}.json`
          )) as {
            name: string;
            dependencies?: Record<string, string>;
            devDependencies?: Record<string, string>;
            files?: { content: string }[];
          };

          files[`/components/ui/logos/${mod.name}.tsx`] = parseContent(
            mod.files?.[0]?.content ?? ''
          );

          if (mod.dependencies) {
            for (const dep of Object.values(mod.dependencies)) {
              const { name, version } = parseDependencyVersion(dep);
              dependencies[name] = version;
            }
          }

          if (mod.devDependencies) {
            for (const dep of Object.values(mod.devDependencies)) {
              const { name, version } = parseDependencyVersion(dep);
              devDependencies[name] = version;
            }
          }

          await parseLogosComponents(mod.files?.[0]?.content ?? '');
        } catch (error) {
          console.warn(`Failed to load logos component: ${component}`);
        }
      }
    }
  };

  const parseShadcnComponents = async (str: string) => {
    const parsedString = parseContent(str);

    const matches = parsedString.match(
      /from ['"]@\/components\/ui\/(?!(logos|prodkt-ui|logos\/))[^'"/]+['"]/g
    );

    if (matches) {
      const components = [
        ...new Set(
          matches.map((m) =>
            m.replace(/from ['"]@\/components\/ui\//, '').replace(/['"]$/, '')
          )
        ),
      ];

      for (const component of components) {
        try {
          const mod = (await import(`./shadcn/${component}.json`)) as {
            name: string;
            dependencies?: Record<string, string>;
            devDependencies?: Record<string, string>;
            files?: { content: string }[];
          };

          // Load required shadcn/ui component
          files[`/components/ui/${mod.name}.tsx`] = parseContent(
            mod.files?.[0]?.content ?? ''
          );

          // Load required dependencies
          if (mod.dependencies) {
            for (const dep of Object.values(mod.dependencies)) {
              const { name, version } = parseDependencyVersion(dep);

              dependencies[name] = version;
            }
          }

          // Load required devDependencies
          if (mod.devDependencies) {
            for (const dep of Object.values(mod.devDependencies)) {
              const { name, version } = parseDependencyVersion(dep);

              devDependencies[name] = version;
            }
          }

          await parseShadcnComponents(mod.files?.[0]?.content ?? '');
        } catch (error) {
          console.warn(`Failed to load shadcn component: ${component}`);
        }
      }
    }
  };

  // Load selected Prodkt UI component
  const selectedComponent = registry.files?.[0]?.content;
  const selectedComponentContent = parseContent(selectedComponent ?? '');

  if (logos) {
    await parseLogosComponents(selectedComponentContent);
    files[`/components/ui/logos/${name}.tsx`] = parseContent(
      selectedComponentContent
    );
  } else {
    await parseShadcnComponents(selectedComponentContent);
    files[`/components/ui/prodkt-ui/${name}.tsx`] = parseContent(
      selectedComponentContent
    );
  }

  if (registry.dependencies) {
    // Load required dependencies from selected Prodkt UI component
    for (const dep of Object.values(registry.dependencies)) {
      const { name, version } = parseDependencyVersion(dep);

      dependencies[name] = version;
    }
  }

  if (registry.devDependencies) {
    // Load required devDependencies from selected Prodkt UI component
    for (const dep of Object.values(registry.devDependencies)) {
      const { name, version } = parseDependencyVersion(dep);

      devDependencies[name] = version;
    }
  }

  if (registry.registryDependencies) {
    // Process registry dependencies
    for (const dependency of Object.values(registry.registryDependencies)) {
      let mod: {
        name: string;
        dependencies?: Record<string, string>;
        devDependencies?: Record<string, string>;
        files?: { content: string }[];
      };

      if (logos) {
        mod = await import(`../../public/registry/logos/${dependency}.json`);
        const componentContent = mod.files?.[0]?.content ?? '';
        files[`/components/ui/logos/${dependency}.tsx`] =
          parseContent(componentContent);
        await parseLogosComponents(componentContent);
      } else {
        mod = await import(`./shadcn/${dependency}.json`);
        const componentContent = mod.files?.[0]?.content ?? '';
        files[`/components/ui/${mod.name}.tsx`] =
          parseContent(componentContent);

        if (mod.dependencies) {
          // Load required dependencies from shadcn/ui component
          for (const dep of Object.values(mod.dependencies)) {
            const { name, version } = parseDependencyVersion(dep);

            dependencies[name] = version;
          }
        }
        if (mod.devDependencies) {
          // Load required shadcn/ui component

          // Load required devDependencies from shadcn/ui component
          for (const dep of Object.values(mod.devDependencies)) {
            const { name, version } = parseDependencyVersion(dep);

            devDependencies[name] = version;
          }
        }
        await parseShadcnComponents(componentContent);
      }
    }
  }

  // Scan the demo code for any imports of shadcn/ui components
  await parseShadcnComponents(code);
  await parseLogosComponents(code);
  if (demoDependencies) {
    // Load demo dependencies
    for (const [name, version] of Object.entries(demoDependencies)) {
      dependencies[name] = version;
    }
  }

  return (
    <PreviewProvider
      template="react-ts"
      // options={{ bundlerURL: 'https://sandpack-bundler.codesandbox.io' }}
      options={{
        externalResources: [
          'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap',
        ],
      }}
      customSetup={{
        dependencies: {
          // shadcn/ui global dependencies
          '@radix-ui/react-icons': 'latest',
          clsx: 'latest',
          'tailwind-merge': 'latest',
          'class-variance-authority': 'latest',

          // Tailwind dependencies
          tailwindcss: '4.0.0',
          '@tailwindcss/postcss': '4.0.0',
          'tailwindcss-animate': 'latest',
          ...dependencies,

          // Common utilities
          'date-fns': 'latest',
        },
        devDependencies: {
          postcss: 'latest',
          ...devDependencies,
        },
      }}
      files={files}
      className="not-prose max-h-[30rem]"
    >
      <SandboxLayout>
        <SandboxTabs defaultValue="preview">
          <SandboxTabsList>
            <SandboxTabsTrigger value="code">
              <CodeIcon size={14} />
              Code
            </SandboxTabsTrigger>
            <SandboxTabsTrigger value="preview">
              <AppWindowIcon size={14} />
              Preview
            </SandboxTabsTrigger>
            <SandboxTabsTrigger value="console">
              <TerminalIcon size={14} />
              Console
            </SandboxTabsTrigger>
          </SandboxTabsList>
          <SandboxTabsContent value="code" className="overflow-hidden">
            <ResizablePanelGroup
              direction="horizontal"
              className="overflow-hidden"
            >
              <ResizablePanel
                className="overflow-y-auto!"
                defaultSize={25}
                minSize={20}
                maxSize={40}
              >
                <SandboxFileExplorer />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel className="overflow-y-auto!">
                <SandboxCodeEditor />
              </ResizablePanel>
            </ResizablePanelGroup>
          </SandboxTabsContent>
          <SandboxTabsContent value="preview">
            <SandboxPreview />
          </SandboxTabsContent>
          <SandboxTabsContent value="console">
            <SandboxConsole />
          </SandboxTabsContent>
        </SandboxTabs>
      </SandboxLayout>
    </PreviewProvider>
  );
};
