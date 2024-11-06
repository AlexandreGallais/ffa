import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import type { FfaInputTextComponent } from './input-text.lit'; // Assuming correct path
import './input-text.lit'; // Import the component to register it

const meta = {
    title: 'Component/Input/Text',
    tags: ['autodocs'],
    render: (args) =>
        html`<ffa-input-text value="${args.value}"></ffa-input-text>`, // Updated interpolation
    argTypes: {
        value: {
            control: 'text',
        },
    },
    args: {},
} satisfies Meta<FfaInputTextComponent>;

export default meta;
type Story = StoryObj<FfaInputTextComponent>;

export const Story: Story = {
    args: {
        value: 'MDR',
    },
};
