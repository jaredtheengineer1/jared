import Link from "next/link";

const CaseStudyLabel = () => {
  return <span className="case-study-label">Case Study</span>;
};
export default function CaseStudies() {
  return (
    <main>
      <section className="intro">
        <h1>Case Studies</h1>
      </section>
      <section className="case-study-section">
        <div className="case-study-preview">
          <CaseStudyLabel />
          <h2>
            <Link href="/case-studies/component-drift">
              Component Drift in a Growing Frontend
            </Link>
          </h2>
          <p>
            A growing frontend codebase had accumulated subtle component
            divergence...
          </p>
        </div>
      </section>
      <section className="case-study-section">
        <div className="case-study-preview">
          <CaseStudyLabel />
          <h2>
            <Link href="/case-studies/design-system">
              Scaling Frontend Development with a Design System
            </Link>
          </h2>
          <p>
            As the frontend scaled, component drift and one-off decisions
            increased maintenance cost. I designed a shared system of components
            and tokens to stabilize the UI and support long-term growth.
          </p>
        </div>
      </section>
      <section className="case-study-section">
        <div className="case-study-preview">
          <CaseStudyLabel />
          <h2>
            <Link href="/case-studies/virtualized-table">
              Scaling Performance for Large Data Tables
            </Link>
          </h2>
          <p>
            Rendering large datasets introduced noticeable performance and
            interaction lag.
          </p>
        </div>
      </section>
    </main>
  );
}
