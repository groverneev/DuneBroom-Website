import type { Metadata } from "next";

// The contact page itself is a client component (it owns the form state), so
// its metadata lives here.
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about DuneBroom — questions, collaboration, school outreach, or press enquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | DuneBroom",
    description:
      "Get in touch about DuneBroom — questions, collaboration, school outreach, or press enquiries.",
    url: "/contact",
    images: [
      {
        url: "/DuneBroom_Robot.jpg",
        width: 1200,
        height: 630,
        alt: "DuneBroom autonomous beach-cleaning robot",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
