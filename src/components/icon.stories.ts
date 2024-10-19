import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import type { IconComponent } from './icon.lit'; // Assuming correct path
import './icon.lit'; // Import the component to register it

const meta = {
    title: 'Component/Icon',
    tags: ['autodocs'],
    render: (args) => html`<ffa-icon name="${args.name}"></ffa-icon>`, // Updated interpolation
    argTypes: {
        name: {
            control: 'text',
        },
    },
    args: {},
} satisfies Meta<IconComponent>;

export default meta;
type Story = StoryObj<IconComponent>;

export const Story: Story = {
    args: {
        name: 'MDR',
    },
};
