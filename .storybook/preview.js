// import { CodeOrSourceMdx } from "@storybook/addon-docs";
// import { Mermaid } from "mdx-mermaid/Mermaid";
import './theme/style.css';
import { themes } from '@storybook/theming';
import { Theme } from './theme/index.js';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
    viewMode: 'docs',
  // https://github.com/storybookjs/storybook/issues/6867#issuecomment-1245057664
  // docs: {
  //   components: {
  //     code: props =>
  //       (props.className?.includes("mermaid")
  //         ? <Mermaid chart={props.children} />
  //         : <CodeOrSourceMdx {...props} />),
  //   },
  // },
  options: {
    showRoots: true,
    storySort: {
      order: [
        "Introduction",
        "Demo",
        "README",
        "Architecture",["Overview","CodeWalkThrough"],
        "Components",["Form", "useForm","validation","FormFieldsList","FormFieldFactory","*"],
        "*"
      ]
    },
  },
   backgrounds: {
    default: 'transparent',
    values: [
      {
        name: 'transparent',
        value: 'transparent',
      },
      {
        name: 'white',
        value: 'white',
      },
      {
        name: 'black',
        value: 'black',
      },
    ],
  },
    darkMode:{
    darkClass: 'darkClass',
    lightClass: 'lightClass',
    light: { ...themes.normal, ...Theme.light, ...Theme.common },
    dark: { ...themes.dark, ...Theme.dark, ...Theme.common },
    stylePreview: true,
  }
};
