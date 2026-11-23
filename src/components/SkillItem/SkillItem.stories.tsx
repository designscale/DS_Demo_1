import type { Meta, StoryObj } from '@storybook/react';
import { SkillItem } from './SkillItem';

const meta = {
  title: 'Sections/SkillItem',
  component: SkillItem,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  decorators: [(Story) => <div style={{ width: 353 }}><Story /></div>],
} satisfies Meta<typeof SkillItem>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
