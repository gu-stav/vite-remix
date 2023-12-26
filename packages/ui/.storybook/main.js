/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  core: {
    builder: '@storybook/builder-vite',
  },
  stories: [
    "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
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
};

export default config;
