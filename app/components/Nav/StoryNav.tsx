"use client";

export const StoryNav = (props: { backTo: string; backText: string }) => {
  const { backTo, backText } = props;
  return (
    <nav className="case-study-nav" aria-label={`${backText} navigate`}>
      <a href={backTo} className="back-link">
        ← Back to {backText}
      </a>
    </nav>
  );
};
