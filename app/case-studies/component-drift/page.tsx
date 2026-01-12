import { CaseStudyNav } from "../../components/Nav/CaseStudyNav";

export default function ComponentDrift() {
  return (
    <main>
      <CaseStudyNav />
      <section className="intro">
        <h1>Reducing Component Drift Across Pages</h1>
      </section>
      <section className="preview-section">
        <h2>The Problem</h2>
        <p>
          Over time, due to reasonable decisions made in isolation, components
          across our application began to drift. Buttons developed small visual
          inconsistencies, tables handled spacing and row styles differently,
          and similar UI patterns were re-implemented in slightly different
          ways.
        </p>
        <p>
          Each change solved a real problem under delivery constraints. However,
          as the application grew, these differences accumulated, making the UI
          harder to maintain and less predictable for users.
        </p>
      </section>
      <section className="preview-section">
        <h2>Why This Was Hard</h2>
        <p>
          This wasn’t a single bug or broken feature — it was a systems problem.
        </p>
        <p>
          Similar components existed in different states with different
          requirements. Tight coupling between UI components and individual
          pages made cross-cutting changes difficult, and “quick fixes” became
          the path of least resistance.
        </p>
        <p>
          Addressing component drift meant resisting the temptation to patch
          symptoms and instead understanding what was drifting, why it was
          happening, and how to fix it in a way that would hold up over time.
        </p>
      </section>
      <section className="preview-section">
        <h2>The Decision</h2>
        <p>
          I approached the problem by focusing on shared intent, not just shared
          code.
        </p>
        <p>
          First, I audited existing components to identify:
          <ul>
            <li>Which differences were intentional</li>
            <li>Which differences were accidental</li>
            <li>What similar behaviors were being solved repeatedly</li>
          </ul>
        </p>
        <p>
          From there, I worked toward a set of reusable, composable components
          that clearly separated:
          <ul>
            <li>Structure from presentation</li>
            <li>Shared behavior from page-specific configuration</li>
          </ul>
        </p>
        <p>
          Rather than forcing a one-size-fits-all abstraction, I designed
          components with clear extension points. This allowed teams to opt into
          consistency without blocking legitimate variation.
        </p>
      </section>
      <section className="preview-section">
        <h2>Execution</h2>
        <p>
          A few guiding principles shaped the solution:
          <ul>
            <li>Composition over configuration</li>
            <li>Focused components over highly configurable ones</li>
            <li>&ldquo;Correct&rdquo; should be the easiest path</li>
          </ul>
        </p>
        <p>
          These principles helped keep components understandable, encouraged
          reuse, and reduced the likelihood of new drift being introduced.
        </p>
      </section>
      <section className="preview-section">
        <h2>Impact</h2>
        <p>
          Pages across the application felt more cohesive and predictable.
          Shared components reduced duplication and made future changes safer.
          New features could be built faster by composing existing patterns
          instead of starting from scratch.
        </p>
        <p>
          Most importantly, the system became easier to evolve without
          reintroducing the same class of problems.
        </p>
      </section>
    </main>
  );
}
