import Link from "next/link";
import { Label as EngineeringLabel } from "@/app/components/Label/Label";
import { Topics } from "@/app/components/Topics/Topics";
export default function EngineeringStories() {
  return (
    <main>
      <section className="intro">
        <h1>Engineering Stories</h1>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <EngineeringLabel>Engineering Story</EngineeringLabel>
          <h2>
            <Link href="/engineering-stories/executable-docs">
              Reducing Legacy Risk Through Executable Documentation
            </Link>
          </h2>
          <p>
            Using tests and AI-assisted workflows to turn tribal knowledge into
            executable documentation for a decade-old application.
          </p>
          <Topics topics={["Testing", "Documentation", "Legacy Systems"]} />
        </div>
      </section>
      <section className="preview-section">
        <div className="case-study-preview">
          <EngineeringLabel>Engineering Story</EngineeringLabel>
          <h2>
            <Link href="/engineering-stories/messy-road">
              The Messy Road to a Design System - Tales from the Trenches
            </Link>
          </h2>
          <p>
            A pragmatic look at standardizing colors, themes, and tooling while
            migrating a multi-application frontend ecosystem.
          </p>
        </div>
      </section>
    </main>
  );
}
