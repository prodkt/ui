import type { PluginCreator } from './types/tailwind-internals';

declare const plugin: {
  handler: PluginCreator;
  config?: { theme?: { extend?: Record<string, unknown> } };
};

export = plugin;
