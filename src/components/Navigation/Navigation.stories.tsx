import type { Meta, StoryObj } from '@storybook/react';
import { BreakpointFrames } from '../../stories/BreakpointFrames';
import { Navigation } from './Navigation';

const meta = {
  title: 'Layout/Navigation',
  component: Navigation,
  tags: ['autodocs'],
} satisfies Meta<typeof Navigation>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Breakpoints: Story = { render: (args) => <BreakpointFrames><Navigation {...args} /></BreakpointFrames> };
export const MobileMenuOpen: Story = {
  args: { defaultMenuOpen: true },
  render: (args) => <div style={{ width: 375 }}><Navigation {...args} /></div>,
};
