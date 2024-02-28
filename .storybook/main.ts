import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal(config, options) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          components: resolve(__dirname, "../src/components"),
          hooks: resolve(__dirname, "../src/hooks"),
          stitches: resolve(__dirname, "../src/stitches.ts"),
        },
      },
    });
  },
};
export default config;
