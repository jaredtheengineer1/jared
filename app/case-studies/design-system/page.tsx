import { CaseStudyNav } from "../../components/Nav/CaseStudyNav";

export default function DesignSystem() {
  return (
    <main>
      <CaseStudyNav />
      <section className="intro">
        <h1>Design Tokens / CSS Package</h1>
      </section>
      <section className="case-study-section">
        <h2>Context</h2>
        <p>
          While our component library addresses UI consistency within a single
          application, we still lack a shared, scalable way to express design
          decisions across projects. As multiple teams and codebases evolve,
          visual and interaction patterns are increasingly redefined in slightly
          different ways.
        </p>
        <p>
          To address this, we introduce a reusable CSS package built around
          design tokens, with a clear separation between primitive values,
          semantic intent, and component-level usage.
        </p>
      </section>
      <section className="case-study-section">
        <h2>The Problem</h2>
        <p>
          Design discussions are becoming ambiguous and inefficient. Terms like
          “input,” “primary color,” or “normal spacing” mean different things to
          different people depending on context, codebase, or point in time.
        </p>
        <p>
          This lack of a shared vocabulary makes collaboration between design,
          product, and engineering harder than it needs to be, and increases the
          risk of subtle inconsistencies being introduced as systems evolve.
        </p>
      </section>
      <section className="case-study-section">
        <h2>The Decision</h2>
        <p>
          Rather than continuing to resolve these ambiguities on a case-by-case
          basis, we choose to invest in a design system that defines clear,
          durable contracts for how visual and interaction decisions are
          expressed in code.
        </p>
        <p>
          The goal is not just reuse, but alignment: creating a shared language
          that allows teams to reason about design intent consistently across
          projects, while still leaving room for evolution.
        </p>
      </section>
      <section className="case-study-section">
        <h2>Execution</h2>
        <p>
          We create a CSS package structured around three layers:
          <dl className="case-study-dl">
            <dt>Primitive Tokens:</dt>
            <dd>
              Raw values representing colors, typography, spacing, and other
              fundamentals.
            </dd>
            <dt>Semantic Tokens:</dt>
            <dd>
              Tokens that map primitive values to design intent, such as
              color-primary or color-error, allowing meaning to remain
              consistent even as underlying values evolve.
            </dd>
            <dt>Component Styles:</dt>
            <dd>
              Styles that apply semantic tokens to specific UI components,
              defining their appearance without coupling components directly to
              raw values.
            </dd>
          </dl>
        </p>
        <p>
          This layering allows visual changes to be made with a controlled blast
          radius, while preserving a shared language across teams and codebases.
        </p>
      </section>
      <section className="case-study-section">
        <h2>Impact</h2>
        <p>
          As a result, teams are able to discuss design decisions using a common
          vocabulary. Visual changes can be rolled out confidently across
          projects, and engineers spend less time reinterpreting design intent
          in each new context.
        </p>
      </section>
      <section className="case-study-section">
        <h2>Reflection</h2>
        <p>
          This approach requires more upfront coordination, but it significantly
          reduces ambiguity and rework as the system scales.
        </p>
      </section>
    </main>
  );
}
