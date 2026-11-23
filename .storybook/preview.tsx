import type { Preview } from '@storybook/react';
import '../src/styles/global.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Figma "color" collection mode',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light';
      document.documentElement.setAttribute('data-theme', theme);
      return (
        <div data-theme={theme} style={{ background: 'var(--color-surface-default)', color: 'var(--color-text-default)', padding: 0 }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true, matchers: { color: /(background|color)$/i } },
    viewport: {
      viewports: {
        figmaDesktop: { name: 'Figma desktop (1280)', styles: { width: '1280px', height: '900px' }, type: 'desktop' },
        figmaTablet: { name: 'Figma tablet (800)', styles: { width: '800px', height: '1024px' }, type: 'tablet' },
        figmaMobile: { name: 'Figma mobile (375)', styles: { width: '375px', height: '812px' }, type: 'mobile' },
      },
    },
    options: {
      storySort: { order: ['Introduction', 'Foundations', 'Primitives', 'Layout', 'Sections', 'Pages'] },
    },
  },
};

export default preview;
