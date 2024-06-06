const WepbackPluginJsDocToMdx = require("./webpack-plugin-jsdoc-to-mdx/index.js");
const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-outline",
   "storybook-dark-mode",
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     rule: {
    //       // test: [/\.stories\.jsx?$/], This is default
    //       include: [path.resolve(__dirname, '../src')], // You can specify directories
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: false },
    //       injectStoryParameters: false,
    //     },
    //     sourceLoaderOptions: {
    //       injectStoryParameters: false,
    //     },
    //   },
    // },
  ],
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|jsx|mdx)"],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
  "webpackFinal": async (config, { configType }) => {
    config.plugins.push(new WepbackPluginJsDocToMdx({
      files:[
        {
          metaTitle: "Components/useForm",
          inputFilePath: "src/Form/useForm/index.jsx",
          outpuFilePath: "src/Form/useForm/useForm.autogenerated.stories.mdx"
        },
        {
          metaTitle: "Components/validation",
          inputFilePath: "src/Form/useForm/validation/index.js",
          outpuFilePath: "src/Form/useForm/validation/validation.autogenerated.stories.mdx"
        },
      ]
    }))
    return config;
  }
};

