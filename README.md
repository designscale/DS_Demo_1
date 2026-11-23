# Portfolio design system (Figma → React)

React components and design tokens generated from the Figma file
[01 – Step 1: Hand-made Figma to Code](https://www.figma.com/design/dnwGNVk1eoOXoxPtqh4qWy), documented in Storybook.

## Run

```bash
npm install
npm run storybook   # http://localhost:6006
```

`npm run tokens` regenerates `src/tokens/tokens.css` from `src/tokens/tokens.json` (it also runs before Storybook starts).

## Structure

```
src/
  tokens/tokens.json      Figma variables (collections + modes) as data
  tokens/tokens.css       generated CSS custom properties + text-style classes
  styles/global.css       Poppins font, tokens, base styles
  components/             Button, Logo, MenuToggle, Navigation, Footer,
                          Hero, ProjectCard, SkillItem, Skills, About
  stories/                Introduction, Foundations, full Portfolio page
  assets/                 SVG/PNG assets exported from Figma
```

## Figma → code decisions

- **Breakpoint variants become one responsive component.** Figma has separate desktop / tablet / mobile variants; in code each component uses container queries (≥800px = tablet, ≥1280px = desktop), so it adapts to wherever it is placed.
- **Text primitive modes (sm / md / lg) follow the same container widths**, so headings shrink exactly as in Figma.
- **Color modes light / dark** map to `data-theme="light" | "dark"`.
- **Interactive states** (hover, pressed, focus) come from CSS. `forceState` on Button only exists to document them.
- Some hand-made spacing in Figma (e.g. About: 66 / 52.875 / 95px) was snapped to the nearest space token.
