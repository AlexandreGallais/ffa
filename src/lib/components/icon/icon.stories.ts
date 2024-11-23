import type { Meta, StoryObj } from '@storybook/angular';

import { FfaIconsEnum } from '../../enums';
import { FfaIconComponent } from './icon.component';

const meta: Meta<FfaIconComponent> = {
  component: FfaIconComponent,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.values(FfaIconsEnum),
    },
    color: {
      control: { type: 'color', presetColors: ['red', 'green'] },
    },
    size: { control: { type: 'number', min: 1, max: 512 } },
  },
};

export default meta;

export const Default: StoryObj<FfaIconComponent> = {
  args: {
    name: FfaIconsEnum.Circle,
    color: 'black',
    size: 28,
  },
};
