import type { Meta, StoryObj } from '@storybook/react';
import tokens from '../tokens/tokens.json';

const meta = { title: 'Foundations', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj;

const label: React.CSSProperties = { font: '600 12px/1.4 system-ui, sans-serif', color: 'var(--color-text-default)' };
const sub: React.CSSProperties = { font: '11px/1.4 ui-monospace, monospace', color: 'var(--color-text-muted)' };
const h: React.CSSProperties = { font: '700 20px/1.2 system-ui, sans-serif', margin: '32px 0 12px', color: 'var(--color-text-default)' };

function Swatch({ cssVar, name, note }: { cssVar: string; name: string; note?: string }) {
  return (
    <div style={{ width: 130 }}>
      <div style={{ height: 64, borderRadius: 8, background: `var(${cssVar})`, border: '1px solid var(--color-border-default)' }} />
      <div style={{ ...label, marginTop: 6 }}>{name}</div>
      <div style={sub}>{cssVar}</div>
      {note && <div style={sub}>→ {note}</div>}
    </div>
  );
}

type Semantic = Record<string, { light: string; dark: string } | Record<string, unknown>>;
function flatten(node: Semantic, path: string[] = []): { name: string; light: string; dark: string }[] {
  return Object.entries(node).flatMap(([k, v]) => {
    if (k.startsWith('$')) return [];
    if (v && typeof v === 'object' && 'light' in v) return [{ name: [...path, k].join('/'), ...(v as { light: string; dark: string }) }];
    return flatten(v as Semantic, [...path, k]);
  });
}

/** Figma collections "color primitives" and "color" (light / dark). Switch Theme in the toolbar. */
export const Colors: Story = {
  render: (_, { globals }) => {
    const mode = (globals.theme ?? 'light') as 'light' | 'dark';
    const semantic = flatten(tokens.color as unknown as Semantic);
    const groups = [...new Set(semantic.map((s) => s.name.split('/')[0]))];
    return (
      <div>
        <h2 style={h}>Semantic colors · {mode}</h2>
        {groups.map((g) => (
          <div key={g} style={{ marginBottom: 24 }}>
            <div style={{ ...label, textTransform: 'uppercase', marginBottom: 8 }}>{g}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {semantic.filter((s) => s.name.startsWith(g + '/')).map((s) => (
                <Swatch key={s.name} name={s.name} cssVar={`--color-${s.name.replace(/\//g, '-')}`} note={s[mode]} />
              ))}
            </div>
          </div>
        ))}
        <h2 style={h}>Primitives</h2>
        {Object.entries(tokens['color-primitives']).map(([group, steps]) => (
          <div key={group} style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 24 }}>
            {Object.entries(steps).sort(([a], [b]) => a.localeCompare(b)).map(([step, hex]) => (
              <Swatch key={step} name={`${group}/${step}`} cssVar={`--color-${group}-${step}`} note={hex} />
            ))}
          </div>
        ))}
      </div>
    );
  },
};

/** Figma text styles. Sizes come from the "text primitives" collection (sm / md / lg modes). */
export const Typography: Story = {
  render: () => {
    const sizes = tokens['text-primitives']['font-size'];
    return (
      <div className="ds-root">
        <h2 style={h}>Text styles</h2>
        {Object.entries(tokens.font).filter(([k]) => !k.startsWith('$')).map(([name, s]) => {
          const style = s as { size: keyof typeof sizes; weight: string; lineHeight: number | string; letterSpacing: number };
          const sz = sizes[style.size];
          return (
            <div key={name} style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 24, padding: '16px 0', borderTop: '1px solid var(--color-border-default)', alignItems: 'baseline' }}>
              <div>
                <div style={label}>font/{name}</div>
                <div style={sub}>.ds-font-{name.replace(/\//g, '-')}</div>
                <div style={sub}>{style.weight} · {sz.sm}/{sz.md}/{sz.lg}px · lh {style.lineHeight} · ls {style.letterSpacing}%</div>
              </div>
              <div className={`ds-font-${name.replace(/\//g, '-')}`}>{name.startsWith('display') ? 'UX. UI. AGENTIC AI.' : 'The quick brown fox jumps over the lazy dog'}</div>
            </div>
          );
        })}
        <h2 style={h}>Font size scale</h2>
        <table style={{ ...sub, borderCollapse: 'collapse' }}>
          <thead><tr>{['token', 'sm (<800)', 'md (≥800)', 'lg (≥1280)'].map((t) => <th key={t} style={{ textAlign: 'left', padding: '4px 16px 4px 0' }}>{t}</th>)}</tr></thead>
          <tbody>
            {Object.entries(sizes).map(([k, v]) => (
              <tr key={k}><td style={{ padding: '4px 16px 4px 0' }}>font-size/{k}</td><td>{v.sm}</td><td>{v.md}</td><td>{v.lg}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

/** Figma collection "space primitives". */
export const Spacing: Story = {
  render: () => (
    <div>
      <h2 style={h}>Space</h2>
      {Object.entries(tokens.space).map(([step, value]) => (
        <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
          <div style={{ ...label, width: 90 }}>space/{step}</div>
          <div style={{ ...sub, width: 50 }}>{value}px</div>
          <div style={{ height: 16, width: `var(--space-${step})`, background: 'var(--color-brand-500)', borderRadius: 2 }} />
        </div>
      ))}
      <h2 style={h}>Radius</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 64, height: 64, borderRadius: 'var(--radius-md)', background: 'var(--color-surface-raised)', border: '1px solid var(--color-border-default)' }} />
        <div><div style={label}>radius/md</div><div style={sub}>{tokens.radius.md}px</div></div>
      </div>
    </div>
  ),
};
