import Link from "next/link";

const PresentationLabel = () => {
  return <span className="case-study-label">Presentation</span>;
};

export const TalksPage = () => {
  return (
    <main>
      <section className="intro">
        <h1>Talks/Presentations</h1>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <PresentationLabel />
          <h2>Design Token Architecture</h2>
          <div className="presentation-links">
            <a
              href="/design-token-architecture-outline.pdf"
              rel="noopener noreferrer"
              download
            >
              Talk Outline
            </a>
            <a
              href="/design-token-architecture-slides.pdf"
              rel="noopener noreferrer"
              download
            >
              Talk Slides
            </a>
          </div>
          <p>
            A practical guide to scaling UI across multiple applications using
            design tokens. This talk covers the three-layer token
            architecture—primitives, semantics, and component
            tokens—demonstrates an incremental migration strategy, and shows how
            to maintain consistency and clarity at scale.
          </p>
        </div>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <PresentationLabel />
          <h2>Storybook as your Component Contract</h2>
          <div className="presentation-links">
            <a
              href="/storybook-as-contract-outline.pdf"
              rel="noopener noreferrer"
              download
            >
              Talk Outline
            </a>
            <a
              href="/storybook-as-contract-slides.pdf"
              rel="noopener noreferrer"
              download
            >
              Talk Slides
            </a>
          </div>
          <p>
            A practical approach to turning Storybook into a reliable source of
            truth for your UI. This talk reframes Storybook as a component
            contract, covering how to define state with args, enforce behavior
            with play functions, and protect appearance with visual regression
            testing—eliminating drift and building trust in your design system.
          </p>
        </div>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <PresentationLabel />
          <h2>The Messy Road to a Design System - Tales from the Trenches</h2>
          {/* <a href="/messy-road-outline.pdf" rel="noopener noreferrer" download>
            Talk Outline
          </a>
          <a href="/messy-road-slides.pdf" rel="noopener noreferrer" download>
            Talk Slides
          </a> */}
        </div>
        <p>
          A candid, real-world exploration of building a design system from
          legacy artifacts, distributed applications, and incomplete
          documentation. This talk walks through the messy journey of
          standardizing colors, migrating themes, modernizing primitives with
          OKLCH, overcoming tooling gaps, and enforcing consistency across
          multiple apps and teams. Attendees will see how iterative improvements
          uncover new challenges, learn strategies for aligning stakeholders,
          and understand why a design system is always a work in progress—not a
          finished product.
        </p>
      </section>
    </main>
  );
};

export default TalksPage;
