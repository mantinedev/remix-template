import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../**/*.story.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    {
      name: "@storybook/addon-styling",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
};

export default config;
