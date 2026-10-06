import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Neev Grover",
  description:
    "Neev Grover is the student inventor behind DuneBroom, an autonomous beach-cleaning robot combining machine-learning vision with mechanical sieving.",
  alternates: { canonical: "/about_me" },
  openGraph: {
    title: "About Neev Grover | DuneBroom",
    description:
      "Neev Grover is the student inventor behind DuneBroom, an autonomous beach-cleaning robot combining machine-learning vision with mechanical sieving.",
    url: "/about_me",
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

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-background transition-colors duration-300">
      <section className="py-16 max-w-[860px] mx-auto px-8">
        <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-2 mt-0">
          The Creator
        </p>
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-10 mt-0">
          About
        </h1>

        {/* Profile */}
        <div className="flex gap-9 items-start mb-10 flex-wrap">
          <Image
            src="/neev_profile.png"
            alt="Neev Grover, founder of DuneBroom"
            width={160}
            height={160}
            className="rounded-full bg-surface shrink-0"
          />
          <div className="flex-1 min-w-[240px]">
            <h2 className="text-3xl font-bold tracking-tight mb-1 mt-0">Neev Grover</h2>
            <p className="text-lg text-accent mb-4">Founder · Junior at the Harker School</p>
            <p className="text-base leading-relaxed text-muted">
              Neev is a student inventor passionate about using technology to solve real-world
              environmental problems. He built DuneBroom from the ground up — designing the
              mechanical sieving system, training the ML vision model, and leading school
              outreach programs across India. Outside of engineering, he enjoys competitive
              chess, writing about technology, and building projects that make a tangible impact.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* The Mission */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-4 mt-0">The Mission</h2>
          <p className="text-base leading-relaxed text-muted mb-4">
            DuneBroom started with a simple observation: beach cleanups rely entirely on human
            volunteer hours, and yet less than 1% of coastal debris gets removed each year.
            Neev set out to build a robot that could work autonomously — patrolling and
            collecting without intervention — while staying affordable enough to be deployed
            at scale.
          </p>
          <p className="text-base leading-relaxed text-muted">
            The project grew into something larger: an education and awareness program reaching
            450+ students across 5 schools in India, a children&apos;s book, and a drawing
            competition that gave young people a creative voice in the fight for a cleaner planet.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: "450+", label: "Students reached" },
            { value: "5", label: "Partner schools" },
            { value: "1", label: "Book published" },
            { value: "2+", label: "Years of research" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-surface p-5 text-center rounded-md border border-border">
              <span className="block text-3xl font-extrabold text-accent tracking-tighter leading-none mb-1">
                {value}
              </span>
              <span className="text-xs text-muted">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
