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
          <h2>
            <a
              href="/design-token-architecture-script.pdf"
              rel="noopener noreferrer"
              download
            >
              Design Token Architecture
            </a>
          </h2>
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
          <h2>
            <a
              href="/storybook-as-contract-script.pdf"
              rel="noopener noreferrer"
              download
            >
              Storybook as your Component Contract
            </a>
          </h2>
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
    </main>
  );
};

export default TalksPage;
