export default function Contact() {
  return (
    <main>
      <section className="intro">
        <h1>Contact</h1>
      </section>
      <section className="contact-section">
        <p>
          If you'd like to talk about systems, frontend architecture, or
          potential opportunities, you can reach me at:
        </p>
        <ul className="contact-links">
          <li>
            <a href="mailto:jared.the.engineer1@gmail.com">
              Jared.The.Engineer1@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jared-clayborn-8b4b0995/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jaredtheengineer1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
        <p className="resume-link">
          Download{" "}
          <a
            href="/Jared_Clayborn_Senior_Software_Engineer.pdf"
            download
            rel="noopener noreferrer"
          >
            my resume
          </a>
        </p>
      </section>
    </main>
  );
}
