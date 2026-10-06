import type { MetadataRoute } from "next";

// Served at /sitemap.xml. Add new routes here as well as to `navLinks`.
const routes = [
  { path: "/", priority: 1.0 },
  { path: "/system-logic", priority: 0.9 },
  { path: "/technical-architecture", priority: 0.9 },
  { path: "/outreach", priority: 0.8 },
  { path: "/about_me", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // The site is statically built, so this is the date of the last deploy.
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `https://dunebroom.com${path}`,
    lastModified,
    priority,
  }));
}
