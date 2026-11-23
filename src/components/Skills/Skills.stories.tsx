import type { Meta, StoryObj } from '@storybook/react';
import { BreakpointFrames } from '../../stories/BreakpointFrames';
import { Skills } from './Skills';

const meta = {
  title: 'Sections/Skills',
  component: Skills,
  tags: ['autodocs'],
} satisfies Meta<typeof Skills>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CustomItems: Story = {
  args: {
    items: [
      { headline: 'UX Research', content: 'Interviews, usability tests and synthesis that turn into clear product decisions.' },
      { headline: 'UI Design', content: 'Design systems, tokens and components that scale from Figma to code.' },
      { headline: 'Agentic AI', content: 'Prototyping with AI agents to move from idea to working product faster.' },
    ],
  },
};
export const Breakpoints: Story = { render: (args) => <BreakpointFrames><Skills {...args} /></BreakpointFrames> };
