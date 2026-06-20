import { StoryNav } from "../../components/Nav/StoryNav";

export default function LegacyTesting() {
  return (
    <main>
      <StoryNav></StoryNav>
      <section className="intro">
        <h1>
          Restoring Confidence in a Legacy System with Incremental Test Coverage
        </h1>
      </section>
      <section className="preview-section">
        <h2>Context</h2>
        <p>
          This case study focuses on a legacy frontend application that remains
          critical to the business. It is an AngularJS 1.8 application that
          still powers approximately 75–80% of the reports used by customers
          today.
        </p>
        <p>
          AngularJS is fundamentally different from modern Angular — not just
          syntactically, but architecturally. Dependency injection, services,
          and application structure follow patterns that are no longer common
          practice. As community support has faded and fewer engineers have
          direct experience with AngularJS, much of the practical knowledge
          required to work safely in this codebase has eroded.
        </p>
        <p>
          While documentation exists online, it is increasingly difficult to
          distinguish legacy AngularJS guidance from modern Angular resources,
          further increasing the barrier to entry for engineers unfamiliar with
          the ecosystem.
        </p>
      </section>
      <section className="preview-section">
        <h2>The Problem</h2>
        <p>
          Despite being business-critical, this system had no meaningful test
          coverage and very little documentation. As a result, there was no
          shared confidence in making changes — neither from the engineering
          team implementing them nor from product stakeholders approving them.
        </p>
        <p>
          Small changes frequently caused regressions in unexpected areas. Each
          update required a full manual regression of the application, which
          made development slow and risky. Over time, this led to a feedback
          loop:
        </p>
        <ul>
          <li>The system was considered “stable”</li>
          <li>Because it was “stable,” it was touched as little as possible</li>
          <li>
            Because it was rarely touched, knowledge of how it worked continued
            to decay
          </li>
        </ul>
        <p>
          Even engineers who had prior AngularJS experience used it infrequently
          enough that their familiarity steadily degraded. The application
          increasingly functioned as a black box.
        </p>
      </section>
      <section className="preview-section">
        <h2> Constraints</h2>
        <p>A full rewrite was not viable.</p>
        <ul>
          <li>The original authors had long since left the company</li>
          <li>There was little institutional knowledge remaining</li>
          <li>The system’s surface area was large and tightly coupled</li>
          <li>
            The risk of unintended breakage was high and poorly understood
          </li>
        </ul>
        <p>
          Any attempt to modernize or replace the system without first
          understanding its behavior would have introduced significant risk to a
          core customer-facing product.
        </p>
      </section>
      <section className="preview-section">
        <h2>Strategy: Incremental Test Coverage as Risk Reduction</h2>
        <p>
          At the start of this effort, the test suite consisted of a single file
          containing only a comment indicating that tests might be added in the
          future.
        </p>
        <p>
          Rather than attempting broad refactors or large-scale changes, I
          focused on introducing tests incrementally, using them not just as
          validation tools, but as a way to document behavior and establish
          trust in the system.
        </p>
        <p>The goal was not exhaustive coverage, but strategic coverage:</p>
        <ul>
          <li>Identify critical user paths and core report functionality</li>
          <li>
            Capture existing behavior as-is, even when the implementation was
            imperfect
          </li>
          <li>
            Use tests to define the current contract of the system before
            attempting change
          </li>
        </ul>
        <p>
          By treating tests as executable documentation, we were able to safely
          explore the codebase, surface hidden dependencies, and make previously
          opaque behavior explicit.
        </p>
      </section>
      <section className="preview-section">
        <h2>Outcome</h2>
        <p>
          This approach transformed how the team interacted with the legacy
          system.
        </p>
        <ul>
          <li>
            The test suite has grown to ~300 tests, with coverage trending
            upward
          </li>
          <li>Engineers now have a safety net when making changes</li>
          <li>Regressions are caught earlier and more reliably</li>
          <li>
            Knowledge that previously existed only as tribal memory is now
            codified
          </li>
        </ul>
        <p>
          Perhaps most importantly, this work is restoring confidence. The
          system is no longer avoided by default, and future efforts — including
          potential migrations — are now grounded in an clearer understanding of
          how the application actually behaves
        </p>
      </section>
      <section className="preview-section">
        <h2>Reflection</h2>
        <p>
          Legacy systems don&apos;t fail because they are old -- they fail when
          organizations lose the ability to reason about them.
        </p>
        <p>
          By introducing incrememental test coverage, we are reducing risk
          without requiring a rewrite, preserving institutional knowledge, and
          creating a foundation for future change. This work reinforces the idea
          that tests are not just a quality mechanism, but a powerful tool for
          organizational resilience.
        </p>
      </section>
    </main>
  );
}
