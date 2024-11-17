import type { Meta, StoryObj } from '@storybook/angular';

import { IconFfaComponent } from './icon.component';

const meta: Meta<IconFfaComponent> = {
  component: IconFfaComponent,
};

export default meta;

export const Default: StoryObj<IconFfaComponent> = {
  args: {
    name: 'circle',
    color: 'black',
  },
};
