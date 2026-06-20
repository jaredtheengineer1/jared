import Link from "next/link";
import { Label as CaseStudyLabel } from "@/app/components/Label/Label";
export default function CaseStudies() {
  return (
    <main>
      <section className="intro">
        <h1>Case Studies</h1>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <CaseStudyLabel>Case Study</CaseStudyLabel>
          <h2>
            <Link href="/case-studies/component-drift">
              Component Drift in a Growing Frontend
            </Link>
          </h2>
          <p>
            Subtle component divergence emerged as a growing frontend evolved. I
            reduced drift by identifying shared intent and introducing
            composable components that made consistency the default.
          </p>
        </div>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <CaseStudyLabel>Case Study</CaseStudyLabel>
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
      <section className="preview-section">
        <div className="case-study-preview">
          <CaseStudyLabel>Case Study</CaseStudyLabel>
          <h2>
            <Link href="/case-studies/virtualized-table">
              Scaling Performance for Large Data Tables
            </Link>
          </h2>
          <p>
            Rendering large datasets caused noticeable performance and
            interaction lag. I improved responsiveness by virtualizing table
            rendering and reducing unnecessary work.
          </p>
        </div>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <CaseStudyLabel>Case Study</CaseStudyLabel>
          <h2>
            <Link href="/case-studies/legacy-test-coverage">
              Restoring Confidence in a Legacy System with Incremental Test
              Coverage
            </Link>
          </h2>
          <p>
            Restored confidence in a critical legacy system through incremental
            test coverage, enabling safe change without a rewrite.
          </p>
        </div>
      </section>
    </main>
  );
}
