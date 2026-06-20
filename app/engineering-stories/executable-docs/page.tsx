import { StoryNav } from "@/app/components/Nav/StoryNav";

export default function ExecutableDocs() {
  return (
    <main>
      <StoryNav backTo="/engineering-stories" backText="Engineering Stories" />
      <section className="intro">
        <h1>Reducing Legacy Risk Through Executable Documentation</h1>
      </section>
      <section className="preview-section">
        <p>
          Our primary reporting application is an AngularJS 1.x codebase that
          has been around for roughly a decade. It contains more than 500 files,
          multiple files exceeding 5,000 lines, and still powers over 80% of our
          reporting functionality.
        </p>
        <p>Nobody on the team disliked it because it was old.</p>
        <p>
          We disliked it because we couldn&apos;t confidently reason about it.
        </p>
        <p>
          Small changes routinely produced regressions in seemingly unrelated
          areas, often discovered days later by accident. The original authors
          were long gone, three of the four frontend engineers had never worked
          with AngularJS before joining the company, and every modification felt
          like exploring an unfamiliar cave with a flashlight.
        </p>
        <p>Like everyone else on the team, I wanted to replace it.</p>
      </section>
      <section className="preview-section">
        <h2>A Different Investment</h2>
        <p>
          Around that time the company hosted a three-week internal workshop on
          practical AI usage, ending with a two-hour hackathon.
        </p>
        <p>
          My teammates chose what seemed like the obvious project: start
          migrating pieces of the legacy application into our modern React
          reporting platform.
        </p>
        <p>I agreed with the direction.</p>
        <p>I disagreed with the timeframe.</p>
        <p>
          Two hours wasn&apos;t enough to meaningfully migrate a ten-year-old
          application, but it was enough to invest in something that could
          improve every future change.
        </p>
        <p>
          At that point the entire test suite consisted of a single file
          containing one commented-out assertion checking that `true` was
          truthy.
        </p>
        <p>
          So I decided to build a testing process instead of a migration proof
          of concept.
        </p>
      </section>
      <section className="preview-section">
        <h2>Building a System, Not Just Tests</h2>
        <p>The first challenge wasn&apos;t writing assertions.</p>
        <p>
          It was creating enough structure that testing could become repeatable.
        </p>
        <p>
          I started by using AI to inventory the codebase, organizing
          controllers, factories, directives, and other artifacts into a living
          backlog (`stillNeedsTests.txt`). Large files were separated into their
          own work queue, making the remaining work visible instead of
          overwhelming.
        </p>
        <p>Next, I documented conventions.</p>
        <p>
          Rather than inventing a completely new approach, I wrote guidance
          explaining how our React projects organize tests, mock dependencies,
          and name files, while documenting where AngularJS necessarily differs.
          The goal wasn&apos;t identical implementations, but a familiar mental
          model.
        </p>
        <p>
          Once that foundation existed, AI could generate initial test
          candidates that followed established conventions instead of starting
          from zero every time.
        </p>
      </section>
      <section className="preview-section">
        <h2>The First Failure</h2>
        <p>The first generated tests looked successful.</p>
        <p>They were also wrong</p>
        <p>
          Many simply duplicated the implementation inside the test file,
          guaranteeing that changes to production code would continue passing
          because the same logic existed in two places.
        </p>
        <p>
          That forced me to better understand AngularJS dependency injection,
          mocking strategies, and the framework&apos;s testing model instead of
          accepting generated output at face value.
        </p>
        <p>Every failure became documentation.</p>
        <p>
          As new issues were discovered, they were captured in files such as:
        </p>
        <ul>
          <li>how_to_test_angularjs_code.md</li>
          <li>angularjs_testing_anti_patterns.md</li>
          <li>solved_angularjs_testing_issues.md</li>
        </ul>
        <p>
          Instead of rediscovering the same problems, future work could build on
          previous solutions.
        </p>
      </section>
      <section className="preview-section">
        <h2>AI as a Team Member</h2>
        <p>The most interesting outcome wasn&apos;t the initial test count.</p>
        <p>
          It was creating documentation designed for both engineers and AI
          agents.
        </p>
        <p>
          A new testing session starts by reading
          `how_to_test_angularjs_code.md`, which references the remaining
          documentation, identifies the next file from `stillNeedsTests.txt`,
          highlights known anti-patterns, documents previously solved dependency
          injection issues, and explains how to update the backlog when work is
          complete.
        </p>
        <p>
          The result is a repeatable workflow where every testing session starts
          with accumulated project knowledge instead of a blank prompt.
        </p>
      </section>
      <section className="preview-section">
        <h2>Outcome</h2>
        <p>
          By the end of the two-hour hackathon, I had created roughly 300
          working tests where previously there had been none.
        </p>
        <p>
          Since then, I have continued adding coverage whenever I work in the
          legacy application, growing the suite to approximately 1,000 tests.
        </p>
        <p>More importantly, the project changed how I think about AI.</p>
        <p>
          I started the workshop skeptical that AI would make me more
          productive.
        </p>
        <p>
          What changed my mind wasn&apos;t its ability to generate code—it was
          its ability to accelerate the capture, organization, and reuse of
          institutional knowledge.
        </p>
        <p>
          The rewrite of our legacy reporting application may still happen
          someday.
        </p>
        <p>
          Until then, every change leaves the system with more coverage, more
          documentation, and less uncertainty than it had before.
        </p>
        <p>That&apos;s the real outcome of this project.</p>
      </section>
    </main>
  );
}
