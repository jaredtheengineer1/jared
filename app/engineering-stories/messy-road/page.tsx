import { StoryNav } from "@/app/components/Nav/StoryNav";

export default function MessyRoad() {
  return (
    <main>
      <StoryNav backTo="/engineering-stories" backText="Engineering Stories" />
      <section className="intro">
        <h1>Lessons from a Messy Road</h1>
      </section>
      <section className="preview-section">
        <p>It started with a question that should have been easy to answer.</p>
        <p>
          A product manager looked at a feature we had just shipped and asked,
        </p>
        <p>
          <code>Why doesn&apos;t this match the design?</code>
        </p>
        <p>
          I had been at the company for almost five years, so I answered with
          complete confidence.
        </p>
        <p>
          <code>What design?</code>
        </p>
        <p>Everyone laughed.</p>
        <p>Then someone found a Figma file.</p>
        <p>Sort of.</p>
        <p>
          Before COVID, another team had started documenting parts of the
          product. There were colors, typography, icons, and scattered notes
          describing interactions. One specification simply read, &quot;Focused
          inputs should outline in blue.&quot;
        </p>
        <p>Not which blue.</p>
        <p>Just... blue.</p>
        <p>
          The people who created it had long since left the company. The
          reasoning behind those decisions disappeared with them. Even our
          architect didn&apos;t know the file existed.
        </p>
        <p>We didn&apos;t really have a design system.</p>
        <p>We had archaeological evidence that someone had started one.</p>
        <p>That discovery sent me down a rabbit hole.</p>
        <p>
          I began documenting everything I could find, filling in missing
          decisions, standardizing typography, choosing an eight-point spacing
          scale, and mapping our existing Atomic Design components into a small
          repository. When I presented it during an engineering all-hands, I
          wasn&apos;t asking anyone to adopt a design system.
        </p>
        <p>I was trying to give everyone the same vocabulary.</p>
        <p>At the time, it felt like an interesting side project.</p>
        <p>A few months later, it stopped being optional.</p>
        <p>
          Five frontend applications were merged into a single monorepo, and
          every local decision suddenly became everyone else&apos;s problem.
        </p>
        <p>One application defined its primary brand color as blue.</p>
        <p>Another used a slightly different blue.</p>
        <p>One quietly decided that purple was actually the primary color.</p>
        <p>
          Some values lived in MUI themes. Others were embedded in Tailwind
          configuration, CSS files, or inline styles copied from components
          written years apart by different teams.
        </p>
        <p>We didn&apos;t have a shared color system.</p>
        <p>We had accumulated history.</p>
        <p>
          Like most engineering problems, the obvious solution looked
          deceptively simple.
        </p>
        <p>Create a single `colors.ts` file.</p>
        <p>Import it everywhere.</p>
        <p>Problem solved.</p>
        <p>Except it wasn&apos;t.</p>
        <p>
          A shared file gave us a single source of truth, but it didn&apos;t
          guarantee anyone was using it. CSS variables still needed to exist.
          Tailwind and MUI still needed to stay synchronized. Inline styles
          still ignored everything we had just standardized.
        </p>
        <p>
          Every layer of consistency exposed another layer of inconsistency
          underneath it.
        </p>
        <p>The first implementation generated CSS variables at runtime.</p>
        <p>It worked.</p>
        <p>
          It also introduced a flash of unstyled content that was impossible to
          ignore once you noticed it.
        </p>
        <p>That failure changed the direction of the project.</p>
        <p>
          Instead of generating variables in the browser, I wrote a Vite plugin
          that injected them during the build so every application started with
          the same primitives immediately available.
        </p>
        <p>I thought colors would be the difficult part.</p>
        <p>They weren&apos;t.</p>
        <p>
          Modernizing those colors uncovered an entirely different set of
          problems.
        </p>
        <p>
          OKLCH made colors significantly easier to reason about and manipulate,
          but much of our existing tooling simply didn&apos;t understand it.
          Libraries we already depended on couldn&apos;t generate lighter or
          darker variants correctly. Storybook couldn&apos;t visualize the
          values the way designers expected. Browser support required additional
          processing.
        </p>
        <p>
          The work gradually shifted away from components and toward
          infrastructure.
        </p>
        <p>
          We replaced libraries, wrote custom utilities, added PostCSS
          fallbacks, and built Storybook pages that converted between OKLCH,
          Hex, and RGB so designers and engineers could continue speaking the
          same language while the underlying implementation evolved.
        </p>
        <p>
          Around the same time, some applications still depended on MUI v4 while
          others had already migrated to v5.
        </p>
        <p>
          A design system that only worked for new applications wasn&apos;t much
          of a design system.
        </p>
        <p>
          So we built a shared theme that both generations could consume,
          allowing migration work and feature work to move forward together
          instead of competing with one another.
        </p>
        <p>
          Somewhere along the way I realized I wasn&apos;t really building a
          design system anymore.
        </p>
        <p>
          I was reducing the number of decisions every engineer needed to make.
        </p>
        <p>
          The technical challenges were interesting, but they weren&apos;t the
          hardest part.
        </p>
        <p>Alignment was.</p>
        <p>
          Every migration card competed with customer features. QA needed new
          ways to validate shared components. Product had to justify work whose
          value would mostly be measured six months in the future. Engineers had
          to replace familiar shortcuts with patterns that initially felt
          slower.
        </p>
        <p>None of that resistance was irrational.</p>
        <p>
          It was the cost of improving a system while continuing to ship
          software.
        </p>
        <p>The project is still unfinished.</p>
        <p>
          There are semantic tokens left to implement, components left to
          migrate, and tooling that will continue evolving as our applications
          evolve.
        </p>
        <p>I&apos;ve stopped thinking of that as incomplete work.</p>
        <p>Instead, I see it as evidence that the system is alive.</p>
        <p>
          When I started, I thought design systems were libraries full of
          components and colors.
        </p>
        <p>Now I think they&apos;re collections of shared decisions.</p>
        <p>The components matter.</p>
        <p>The tokens matter.</p>
        <p>The tooling matters.</p>
        <p>
          But the most valuable thing we built was a common understanding of why
          those decisions exist in the first place.
        </p>
        <p>That&apos;s the part that scales.</p>
      </section>
    </main>
  );
}
