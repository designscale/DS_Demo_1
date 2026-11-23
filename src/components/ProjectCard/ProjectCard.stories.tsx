import type { Meta, StoryObj } from '@storybook/react';
import { BreakpointFrames } from '../../stories/BreakpointFrames';
import { ProjectCard } from './ProjectCard';

const meta = {
  title: 'Sections/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithoutBackground: Story = { args: { hasBg: false } };
export const Breakpoints: Story = { render: (args) => <BreakpointFrames><ProjectCard {...args} /></BreakpointFrames> };
