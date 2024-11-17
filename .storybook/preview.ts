import { type Preview, applicationConfig } from '@storybook/angular';

import { iconsPathFfaToken, iconsSuffixFfaToken } from '../src/lib/tokens';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(?<color>background|color)$/iu,
        date: /Date$/iu,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [
        { provide: iconsPathFfaToken, useValue: 'assets/icons/' },
        { provide: iconsSuffixFfaToken, useValue: '.icon.svg' },
      ],
    }),
  ],
};

export default preview;
