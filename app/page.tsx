import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className="intro">
        <h1 className="intro-heading">Jared Clayborn</h1>
        <p className="page-intro">
          Hi, I’m Jared. I design and scale SaaS and enterprise web
          applications, with a focus on reliability, maintainability, and
          long-term impact under real-world constraints.
        </p>
      </section>
      <p>
        I’m currently on the frontend team at Avero, Inc., where I work on
        turning complex POS data into clear, actionable insights for operators.
        My work centers on data visualization, reusable table components, and
        flexible filtering systems that let users move from a high-level
        overview down to the details that matter. Beyond day-to-day feature
        work, I focus on unblocking teammates and helping design solutions that
        can grow without becoming harder to change. I approach software with a
        “measure twice, cut once” mindset—thinking carefully about how systems
        and components fit together so the resulting architecture is simpler,
        more precise, and easier to evolve over time. I care deeply about
        building systems that make the next change easier, not harder.
      </p>
    </main>
  );
}
