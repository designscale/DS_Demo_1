import type { Meta, StoryObj } from '@storybook/react';
import { About, Footer, Hero, Navigation, ProjectCard, Skills } from '../index';

/** Figma page "✏️ Design": the full portfolio, assembled from DS components only. */
function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div id="work">
          <ProjectCard hasBg={false} />
          <ProjectCard />
          <ProjectCard hasBg={false} />
          <ProjectCard />
        </div>
        <div id="about"><About /></div>
        <Skills />
      </main>
      <Footer />
    </>
  );
}

const meta = { title: 'Pages/Portfolio', component: PortfolioPage } satisfies Meta<typeof PortfolioPage>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { parameters: { viewport: { defaultViewport: 'figmaDesktop' } } };
export const Tablet: Story = { parameters: { viewport: { defaultViewport: 'figmaTablet' } } };
export const Mobile: Story = { parameters: { viewport: { defaultViewport: 'figmaMobile' } } };
