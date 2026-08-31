"use client";

import { useEffect, useState } from "react";
import { nav, person } from "@/lib/content";

const SECTION_IDS = nav.map((n) => n.href.slice(1));

/** Marks the nav item for whichever section is currently in view. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function SiteHeader() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <header className="head">
      <a href="#top" className="logo">
        {person.name}
      </a>

      <nav className="head__nav" aria-label="Sections">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={active === item.href.slice(1) ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="head__cta">
        <a
          className="btn"
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a className="btn btn--solid" href="#contact">
          Get in touch
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
