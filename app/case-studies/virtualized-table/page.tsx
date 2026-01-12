import { CaseStudyNav } from "../../components/Nav/CaseStudyNav";

export default function VirtualizedTable() {
  return (
    <main>
      <CaseStudyNav></CaseStudyNav>
      <section className="intro">
        <h1>Increasing performance on Large Data Tables</h1>
      </section>
      <section className="preview-section">
        <h2>The Problem</h2>
        <p>
          As data volume increased, table performance degraded noticeably. Once
          a table reached a few thousand rows, scrolling became laggy,
          interactions felt delayed, and the slowdown spilled into the rest of
          the page.
        </p>
        <p>
          Even when users weren’t actively interacting with the table, the cost
          of rendering and maintaining a large DOM tree made the entire
          application feel slower, increasing frustration and abandonment.
        </p>
      </section>
      <section className="preview-section">
        <h2>Why This Was Hard</h2>
        <p>
          Tables are deceptively expensive UI components. Each row brings
          layout, paint, and event-handling costs, and naïvely rendering all
          rows upfront scales poorly as data grows.
        </p>
        <p>
          At the same time, these tables needed to remain flexible: supporting
          sorting, filtering, dynamic row heights, and interactive cells. Any
          performance improvement had to preserve usability, not trade it away.
        </p>
      </section>
      <section className="preview-section">
        <h2>The Decision</h2>
        <p>
          To support large datasets without degrading perceived performance,
          rendering all rows as static HTML was no longer viable.
        </p>
        <p>
          Virtualizing the table — rendering only the rows visible in the
          viewport — allowed us to decouple dataset size from render cost,
          keeping interactions responsive regardless of how much data was
          loaded.
        </p>
      </section>
      <section className="preview-section">
        <h2>The Approach</h2>
        <p>
          Rather than optimizing individual bottlenecks in the existing table, I
          focused on reducing work altogether.
        </p>
        <p>
          Key observations guided the implementation
          <ul>
            <li>
              Rendering fewer DOM nodes consistently outperformed
              micro-optimizations
            </li>
            <li>
              Simpler row structures improved both performance and readability
            </li>
            <li>
              Transforming and reshaping data on every render was significantly
              more expensive than expected
            </li>
          </ul>
        </p>
        <p>
          The table was restructured so that:
          <ul>
            <li>Only visible rows were rendered at any given time</li>
            <li>
              Data transformation happened once, upstream, instead of during
              render
            </li>
            <li>
              Row components were kept deliberately minimal to reduce layout and
              paint costs.
            </li>
          </ul>
        </p>
        <p>
          This allowed the table to scale to large datasets while preserving a
          smooth scrolling experience.
        </p>
      </section>
      <section className="preview-section">
        <h2>The Result</h2>
        <p>
          Table interactions remained fast and predictable even with large
          datasets. Scrolling was smooth, input latency was reduced, and the
          rest of the application no longer felt sluggish when a large table was
          present.
        </p>
        <p>
          By focusing on reducing unnecessary work rather than chasing
          incremental optimizations, the solution scaled cleanly and remained
          easy to reason about as new features were added.
        </p>
      </section>
    </main>
  );
}
