import { applicationConfig, type Preview } from '@storybook/angular';

import { ffaIconsToken, type FfaIconsToken } from '../src/lib/tokens';

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
        {
          provide: ffaIconsToken,
          useValue: {
            path: 'assets/icons/',
            suffix: '.icon.svg',
          } as FfaIconsToken,
        },
      ],
    }),
  ],
};

export default preview;
