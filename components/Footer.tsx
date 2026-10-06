import Link from "next/link";
import { socialLinks } from "./socialLinks";

export default function Footer() {
  const quickLinks = [
    { href: "/system-logic", label: "System Logic" },
    { href: "/technical-architecture", label: "Technical Architecture" },
    { href: "/outreach", label: "Outreach" },
    { href: "/about_me", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-surface border-t border-border text-foreground transition-colors duration-300">
      <div className="max-w-[1152px] mx-auto py-12 px-4">
        <div className="footer-grid grid grid-cols-1 gap-8">
          {/* Site Info */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-foreground">DuneBroom</h3>
            <p className="text-sm text-muted leading-relaxed mb-0">
              An autonomous beach-cleaning robot designed to keep our coastlines
              pristine. Combining robotics, computer vision, and sustainable
              engineering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-[auto_auto] gap-2 justify-start max-w-sm">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-subtle hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none px-2 py-1 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none p-1 rounded"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted mt-4">groverneev at gmail dot com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between items-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} DuneBroom. All rights reserved.</p>
          <p>Autonomous beach cleaning for a cleaner tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
