import type { Meta, StoryObj } from '@storybook/react';
import { BreakpointFrames } from '../../stories/BreakpointFrames';
import { Hero } from './Hero';

const meta = {
  title: 'Sections/Hero',
  component: Hero,
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Breakpoints: Story = { render: (args) => <BreakpointFrames><Hero {...args} /></BreakpointFrames> };
