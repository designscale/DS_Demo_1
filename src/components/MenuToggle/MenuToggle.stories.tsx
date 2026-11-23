import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MenuToggle } from './MenuToggle';

const meta = {
  title: 'Primitives/Menu',
  component: MenuToggle,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof MenuToggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = { args: { open: false } };
export const Open: Story = { args: { open: true } };
export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return <MenuToggle open={open} onClick={() => setOpen(!open)} />;
  },
};
