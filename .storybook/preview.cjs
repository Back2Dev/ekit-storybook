import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

console.log(INITIAL_VIEWPORTS);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'iphone12',
  },
};
