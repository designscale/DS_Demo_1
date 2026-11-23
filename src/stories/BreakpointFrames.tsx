import type { ReactNode } from 'react';

const frames = [
  { label: 'desktop · 1280', width: 1280 },
  { label: 'tablet · 800', width: 800 },
  { label: 'mobile · 375', width: 375 },
];

/**
 * Renders a component at the three Figma breakpoint widths side by side,
 * the way the Figma component set shows its breakpoint variants.
 * Components respond to their container width, so one component covers all three.
 */
export function BreakpointFrames({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40, padding: 32, background: '#444', overflowX: 'auto' }}>
      {frames.map((f) => (
        <div key={f.width}>
          <div style={{ font: '600 12px/1 system-ui, sans-serif', color: '#ddd', marginBottom: 8 }}>{f.label}</div>
          <div style={{ width: f.width, background: 'var(--color-surface-default)' }}>{children}</div>
        </div>
      ))}
    </div>
  );
}
