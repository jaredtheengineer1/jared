"use client";
import Link from "next/link";

export const CaseStudyNav = () => {
  return (
    <nav className="case-study-nav" aria-label="Case study navigation">
      <a href="/case-studies" className="back-link">
        ← Back to Case Studies
      </a>
    </nav>
  );
};
