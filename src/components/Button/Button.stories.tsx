import { Fragment } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { children: 'Label', variant: 'primary', onClick: fn() },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary'] },
    forceState: { control: 'inline-radio', options: [undefined, 'hover', 'active', 'focused'] },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Disabled: Story = { args: { disabled: true } };

/** Matches the Figma component set: variant × state. */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto', gap: 24, alignItems: 'center', padding: 24 }}>
      {(['default', 'hover', 'active', 'focused'] as const).map((state) => (
        <Fragment key={state}>
          <span style={{ font: '12px system-ui', color: 'var(--color-text-muted)' }}>{state}</span>
          <Button {...args} variant="primary" forceState={state === 'default' ? undefined : state} />
          <Button {...args} variant="secondary" forceState={state === 'default' ? undefined : state} />
        </Fragment>
      ))}
    </div>
  ),
};
