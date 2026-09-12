"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/outreach", label: "Outreach" },
  { href: "/system-logic", label: "System Logic" },
  { href: "/technical-architecture", label: "Technical Architecture" },
  { href: "/about_me", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

function MoonIcon() {
  return (
    <svg className="theme-icon-light" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="theme-icon-dark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function ThemeButton({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark/light theme"
      className="rounded-lg w-9 h-9 flex items-center justify-center text-muted hover:bg-surface hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
    >
      <MoonIcon />
      <SunIcon />
    </button>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl text-foreground no-underline hover:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none rounded px-2 py-1"
        >
          DuneBroom
        </Link>

        {/* Desktop links + theme toggle */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-7 list-none p-0 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`no-underline transition-colors relative py-[6px] font-medium text-sm ${
                      isActive ? "text-foreground" : "text-muted hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <ThemeButton toggleTheme={toggleTheme} />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeButton toggleTheme={toggleTheme} />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Toggle menu"}
            className="p-2 rounded-lg hover:bg-surface text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border md:hidden">
          <ul className="max-w-[1200px] mx-auto list-none flex flex-col gap-1 px-4 py-4 m-0">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 px-3 rounded-lg no-underline transition-colors font-medium text-sm ${
                      isActive
                        ? "text-foreground bg-surface"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

    </nav>
  );
}
