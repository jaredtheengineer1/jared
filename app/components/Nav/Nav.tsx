"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Nav = () => {
  const pathname = (usePathname() ?? "/").toLowerCase();

  const isActive = (href: string) => {
    const h = href.toLowerCase();
    if (h === "/") return pathname === "/";
    return pathname === h || pathname.startsWith(h + "/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/case-studies"
            className={`nav-link ${isActive("/case-studies") ? "active" : ""}`}
          >
            Case Studies
          </Link>
        </li>
        <li>
            <Link href="/engineering-stories" className={`nav-link ${isActive('/engineering-stories') ? 'active': ''}`}>Engineering Stories</Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
