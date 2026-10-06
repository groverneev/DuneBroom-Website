import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outreach & Impact",
  description:
    "DuneBroom's grassroots education program: environmental literacy workshops reaching 450+ students across 5 schools in India, a children's book, and news coverage.",
  alternates: { canonical: "/outreach" },
  openGraph: {
    title: "Outreach & Impact | DuneBroom",
    description:
      "DuneBroom's grassroots education program: environmental literacy workshops reaching 450+ students across 5 schools in India, a children's book, and news coverage.",
    url: "/outreach",
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

export default function OutreachPage() {
  return (
    <main id="main-content" className="bg-background transition-colors duration-300">
      <section className="py-16 max-w-[860px] mx-auto px-8">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
          Environment Awareness Program
        </p>
        <h1 className="text-5xl font-extrabold leading-tight mb-1 mt-0">
          Outreach &amp; Impact
        </h1>
        <p className="text-lg text-muted mb-4 leading-relaxed mt-0">
          Combining grassroots education, environmental literacy, and technological innovation
          to empower the next generation of eco-innovators.
        </p>

        {/* Stats */}
        <div className="flex gap-6 flex-wrap mb-10">
          <div className="bg-surface rounded-md p-4 text-center border border-border min-w-[140px]">
            <span className="text-4xl font-extrabold text-accent leading-none tracking-tighter block mb-1">450+</span>
            <span className="text-sm text-muted">students reached</span>
          </div>
          <div className="bg-surface rounded-md p-4 text-center border border-border min-w-[140px]">
            <span className="text-4xl font-extrabold text-accent leading-none tracking-tighter block mb-1">5</span>
            <span className="text-sm text-muted">partner schools</span>
          </div>
        </div>

        {/* SECTION 1 — GRASSROOTS EDUCATION */}
        <div className="pb-10 mb-10 border-b border-border">
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2 mt-0">
            01 — Grassroots Education
          </p>
          <h2 className="text-3xl font-bold leading-tight mb-4 mt-0">Empowering Youth Across Borders</h2>
          <p className="text-base text-muted leading-relaxed mb-6">
            Environmental protection is a global responsibility that requires global education.
            By partnering with multiple schools across India, we hosted interactive environmental
            awareness workshops to engage students directly. This education was translated into
            active participation through large-scale environmental-theme drawing competitions,
            giving hundreds of students a creative platform to express their vision for a cleaner,
            greener Earth.
          </p>

          <div className="w-full overflow-hidden rounded-md mb-2">
            <Image
              src="/in-classroom.jpg"
              alt="Students in classroom watching a virtual environmental awareness workshop"
              sizes="(max-width: 900px) 100vw, 796px"
              width={1600}
              height={716}
              className="w-full object-cover" style={{ width: "100%", height: "auto" }}
            />
          </div>
          <p className="text-sm text-muted mb-4 mt-0">
            Virtual environmental awareness workshop — Kasturba Gandhi Balika Vidyalaya, Andhra Pradesh
          </p>

          <h3 className="text-lg font-semibold mb-1 mt-0">In the News</h3>
          <p className="text-base text-muted mb-4 leading-relaxed">
            As covered by regional press across Andhra Pradesh · March 2026
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { src: "/article-1.jpg", alt: "Prajasakti newspaper coverage of DuneBroom school outreach", width: 1041, height: 1250 },
              { src: "/article-2.jpg", alt: "Andhra Prabha newspaper coverage of DuneBroom school outreach", width: 1600, height: 908 },
              { src: "/article-3.jpg", alt: "Eenadu newspaper coverage of DuneBroom school outreach", width: 1052, height: 406 },
              { src: "/article-4.jpg", alt: "Manam newspaper coverage of DuneBroom school outreach", width: 1600, height: 1032 },
            ].map((article) => (
              <div key={article.src} className="overflow-hidden rounded-md border border-border">
                <Image
                  src={article.src}
                  alt={article.alt}
                  sizes="(max-width: 768px) 100vw, 390px"
                  width={article.width}
                  height={article.height}
                  className="w-full object-cover" style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2 — ENVIRONMENTAL LITERACY */}
        <div>
          <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2 mt-0">
            02 — Environmental Literacy
          </p>
          <h2 className="text-3xl font-bold leading-tight mb-4 mt-0">Educating Through Pages</h2>
          <p className="text-base text-muted leading-relaxed mb-6">
            Real change starts with understanding. To help kids connect with the environment,
            Neev wrote <strong>Adventures of Sunbeam</strong> — a book that turns complex
            environmental issues into inspiring stories for young readers. It includes an appendix
            full of interactive activities and drawing pages, and now serves as the foundation for
            our educational programs everywhere.
          </p>

          <Link
            href="https://www.amazon.com/Adventures-Sunbeam-heartwarming-sustainability-potential-ebook/dp/B0GKCXW4DL/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mb-6"
          >
            Read Adventures of Sunbeam &rarr;
          </Link>

          <div className="w-full overflow-hidden rounded-md mb-2">
            <Image
              src="/people-holding-up-book.jpg"
              alt="Students holding up copies of Adventures of Sunbeam"
              width={1600}
              height={624}
              sizes="(max-width: 900px) 100vw, 796px"
              className="w-full object-cover" style={{ width: "100%", height: "auto" }}
            />
          </div>
          <p className="text-sm text-muted mt-0">
            Students receiving copies of <em>Adventures of Sunbeam</em> — Andhra Pradesh, India
          </p>
        </div>
      </section>
    </main>
  );
}
