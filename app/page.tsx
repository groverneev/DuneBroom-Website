import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main id="main-content">
      {/* HERO SECTION */}
      <section className="hero-section">
        <h1 className="hero-title">DuneBroom</h1>
        <p className="hero-subtitle">Autonomous beach cleaning powered by machine learning</p>

        <p className="hero-description">
          DuneBroom is a low-cost autonomous beach-cleaning robot that combines
          machine-learning-based vision and mechanical sieving to efficiently
          identify and collect debris from soft-sand environments.
        </p>

        <div className="button-group">
          <Link href="/system-logic" className="btn-primary">
            How It Works
          </Link>
          <Link href="/outreach" className="btn-secondary">
            Our Outreach
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <Image
            src="/DuneBroom_Robot.jpg"
            alt="DuneBroom autonomous beach-cleaning robot"
            width={1520}
            height={835}
            className="hero-image" style={{ width: "100%", height: "auto" }}
            sizes="(max-width: 800px) 100vw, 760px"
            priority
          />
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="overview-section">
        <div className="overview-content">
          <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-2">
            The Project
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground mb-10 mt-0">
            Overview
          </h2>

          {/* Problem Statement */}
          <div className="pb-10 mb-10 border-b border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4 mt-0">The Problem</h3>
            <p className="text-base leading-relaxed text-subtle mb-0">
              Each year, approximately{" "}
              <strong className="text-foreground">8 million metric tons of plastic</strong> enter the
              oceans, with much of it washing up on shores, posing a serious threat to marine
              ecosystems. Hundreds of thousands of volunteers every year around the world put in the
              hours to remove this trash from the beaches, but only{" "}
              <strong className="text-foreground">&lt;1%</strong> of the trash gets removed given
              the sheer volume.
            </p>
          </div>

          {/* Hypothesis */}
          <div className="pb-10 mb-10 border-b border-border">
            <h3 className="text-xl font-semibold text-foreground mb-4 mt-0">Hypothesis</h3>
            <p className="text-base leading-relaxed text-subtle mb-0">
              This project investigates whether DuneBroom, a low-cost autonomous beach-cleaning robot
              combining machine-learning-based vision and mechanical sieving, can efficiently identify
              and collect both large (&ge; 20 mm, e.g., bottle caps) and small (&ge; 2 mm, e.g.,
              cigarette butts) debris from soft-sand environments.
            </p>
            <div className="mt-6 py-1 pl-6 border-l-[3px] border-accent">
              <p className="text-[15px] leading-relaxed text-muted mb-0">
                We hypothesize that its integrated scooper-sieve system will achieve{" "}
                <strong className="text-foreground">&ge; 90% collection efficiency</strong> across
                debris sizes, while the ML vision model maintains{" "}
                <strong className="text-foreground">&ge; 95% accuracy</strong> in distinguishing
                litter such as caps and wrappers from natural materials including seaweed and rocks.
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="pb-10 mb-10">
            <h3 className="text-xl font-semibold text-foreground mb-6 mt-0">Key Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="bg-surface p-5 rounded border border-border hover:border-accent transition-colors">
                <h4 className="text-[15px] font-semibold text-foreground mb-2 mt-0">
                  ML-Based Vision
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-0">
                  Machine learning model distinguishes trash from natural materials like seaweed and
                  rocks with high accuracy.
                </p>
              </div>
              <div className="bg-surface p-5 rounded border border-border hover:border-accent transition-colors">
                <h4 className="text-[15px] font-semibold text-foreground mb-2 mt-0">
                  Mechanical Sieving
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-0">
                  Integrated scooper-sieve system collects debris while filtering out sand through a
                  2mm mesh.
                </p>
              </div>
              <div className="bg-surface p-5 rounded border border-border hover:border-accent transition-colors">
                <h4 className="text-[15px] font-semibold text-foreground mb-2 mt-0">
                  Autonomous Operation
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-0">
                  Fully autonomous patrol and collection on soft-sand beach environments without human
                  intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOGNITION SECTION */}
      <section className="recognition-section">
        <div className="recognition-content">
          <h2 className="recognition-title">Recognition</h2>
          <p className="text-base leading-relaxed text-subtle max-w-xl mx-auto mb-4">
            DuneBroom was recognized as one of the{" "}
            <strong className="text-foreground">Conrad Challenge Innovators</strong>, highlighting
            the project&apos;s student-led approach to environmental problem solving.
          </p>
          <a
            href="https://conrad.spacecenter.org/what-is-a-conrad-innovator/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-accent font-medium text-[15px] hover:underline"
          >
            Learn about Conrad Innovators &rarr;
          </a>
        </div>
      </section>
    </main>
  );
}
