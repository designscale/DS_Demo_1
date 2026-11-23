import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Primitives/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Logo>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
export const AsLink: StoryObj<typeof meta> = { args: { href: '#' } };
