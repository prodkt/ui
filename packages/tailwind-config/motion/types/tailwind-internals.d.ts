// src/types/tailwind-internals.d.ts
declare module 'tailwindcss/lib/util/flattenColorPalette.js' {
  type ColorValue = string | { [key: string]: string };
  type NestedColors = {
    [key: string]: ColorValue | NestedColors;
  };

  function flattenColorPalette(colors: NestedColors): Record<string, string>;
  export default flattenColorPalette;
}

export type ThemeValue = import('tailwindcss/dist/plugin.d').ThemeValue;

export type PluginAPI = import('tailwindcss/dist/plugin.d').PluginAPI;

export type Config = import('tailwindcss/dist/plugin.d').Config;

export type CssInJs = import('tailwindcss/dist/plugin.d').CssInJs;

export type PluginCreator = import('tailwindcss/dist/plugin.d').PluginCreator;

export type Plugin = import('tailwindcss/dist/plugin.d').Plugin;

export type CSSRuleObject = import('tailwindcss/dist/plugin.d').CSSRuleObject;
