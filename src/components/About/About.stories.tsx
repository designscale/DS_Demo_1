import type { Meta, StoryObj } from '@storybook/react';
import { BreakpointFrames } from '../../stories/BreakpointFrames';
import { About } from './About';

const meta = {
  title: 'Sections/About',
  component: About,
  tags: ['autodocs'],
} satisfies Meta<typeof About>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithoutButton: Story = { args: { showButton: false } };
export const Breakpoints: Story = { render: (args) => <BreakpointFrames><About {...args} /></BreakpointFrames> };
