import { create } from '@storybook/theming';

const PRIMARY_NAV_BAR_COLOR = 'red';
const PRIMARY_NAV_BAR_TEXT_COLOR = "white";
const CENTER_BACKGROUND_COLOR = '#e5e5e5'; // rgba(51, 51, 51)
const SIDEBAR_BACKGROUND_COLOR = '#faf9f9';

export default {
  base: 'dark',
//   colorPrimary: PRIMARY_NAV_BAR_COLOR,
//   colorSecondary: 'deepskyblue',

//   // UI
//   appBg: SIDEBAR_BACKGROUND_COLOR,
//   appContentBg: CENTER_BACKGROUND_COLOR,
//   appBorderColor: 'grey',
  appBorderRadius: 4,

//   // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

//   // Text colors
//   textColor: 'black',
//   textInverseColor: 'rgba(255,255,255,0.9)',

//   // Toolbar default and active colors
//   barTextColor: 'silver',
//   barSelectedColor: PRIMARY_NAV_BAR_TEXT_COLOR,
//   barBg: PRIMARY_NAV_BAR_COLOR,

//   // Form colors
//   inputBg: 'white',
//   inputBorder: 'silver',
//   inputTextColor: 'black',
  inputBorderRadius: 4,
};
