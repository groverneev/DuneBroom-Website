import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "System Logic",
  description:
    "How DuneBroom works end to end: autonomous patrol, event-driven debris identification, and discriminative actuation of the scooper-sieve system.",
  alternates: { canonical: "/system-logic" },
  openGraph: {
    title: "System Logic | DuneBroom",
    description:
      "How DuneBroom works end to end: autonomous patrol, event-driven debris identification, and discriminative actuation of the scooper-sieve system.",
    url: "/system-logic",
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

export default function SystemLogicPage() {
  return (
    <main id="main-content" className="bg-background transition-colors duration-300">
      <section className="py-16 max-w-[860px] mx-auto px-8 text-foreground">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 mt-0">System Logic</h1>
        <p className="text-lg text-muted mb-10 mt-0">Process Overview</p>

        {/* Figure */}
        <div className="mb-8 rounded-md overflow-hidden bg-surface p-4 border border-border">
          <Image
            src="/Figure_3_Collection_Sequence.png"
            alt="Figure 3: Debris Collection Sequence"
            sizes="(max-width: 900px) 100vw, 796px"
            width={1774}
            height={1318}
            className="w-full object-contain rounded-md" style={{ width: "100%", height: "auto" }}
          />
          <p className="text-xs text-muted text-center italic mt-2 mb-0">
            Figure 3: Debris Collection Sequence
          </p>
        </div>

        {/* Introduction */}
        <div className="pb-8 mb-8 border-b border-border">
          <p className="text-base leading-relaxed text-muted mb-0">
            To achieve autonomous beach cleaning, the robot operates on a continuous decision-making
            loop designed to selectively target debris while actively ignoring natural elements. The
            system functions in an &quot;Autonomous Patrol Mode,&quot; prioritizing energy efficiency
            and rapid reaction times to effectively cover large beach areas.
          </p>
        </div>

        {/* Step 1 */}
        <div className="pb-8 mb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-bold text-sm text-accent min-w-[40px]">01</span>
            <h2 className="text-xl font-bold text-foreground mb-0 mt-0">Autonomous Patrol Mode</h2>
          </div>
          <p className="text-base leading-relaxed text-muted mb-0">
            Upon activation, the robot enters its primary operational state, referred to as
            &quot;Autonomous Patrol&quot;. In this mode, the robot continuously traverses the beach
            while maintaining a low-power surveillance state. The primary input comes from ultrasonic
            distance sensors that continuously poll the environment to detect the proximity of objects
            in the robot&apos;s path. This allows the robot to &quot;watch&quot; for potential targets
            without the heavy battery drain and computational cost of continuous video processing.
          </p>
        </div>

        {/* Step 2 */}
        <div className="pb-8 mb-8 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-bold text-sm text-accent min-w-[40px]">02</span>
            <h2 className="text-xl font-bold text-foreground mb-0 mt-0">Event-Driven Identification</h2>
          </div>
          <p className="text-base leading-relaxed text-muted mb-4">
            The system shifts from &quot;Patrol&quot; to &quot;Analysis&quot; only when a physical
            object is detected within a specific range (approximately 3 inches). This detection acts
            as a hardware trigger to initiate the vision system:
          </p>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg p-5 border-l-4 border-accent bg-surface">
              <h4 className="text-sm font-semibold text-foreground mb-1 mt-0">Visual Capture</h4>
              <p className="text-xs text-muted mb-0">
                The robot stops moving and captures a picture of the obstacle in front of it.
              </p>
            </div>
            <div className="rounded-lg p-5 border-l-4 border-accent bg-surface">
              <h4 className="text-sm font-semibold text-foreground mb-1 mt-0">Classification</h4>
              <p className="text-xs text-muted mb-0">
                A Machine Learning (ML) Model running on the robot analyzes the image to classify
                the object as either &quot;Trash&quot; (e.g., plastic bottles, wrappers) or
                &quot;Nature&quot; (e.g., rocks, seaweed).
              </p>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-bold text-sm text-accent min-w-[40px]">03</span>
            <h2 className="text-xl font-bold text-foreground mb-0 mt-0">Discriminative Actuation</h2>
          </div>
          <p className="text-base leading-relaxed text-muted mb-4">
            Based on the ML classification, the robot executes a specific physical response:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface p-6 rounded-lg border-t-2 border-accent border-l border-border">
              <h4 className="text-sm font-semibold text-foreground mb-2 mt-0">Collection (Trash Detected)</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                If the object is classified as trash, the collection mechanism is lowered to scoop
                the item. As the robot resumes movement, a filtration system sifts out sand through
                a 2mm mesh while retaining debris in a storage bag.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border-t-2 border-border">
              <h4 className="text-sm font-semibold text-foreground mb-2 mt-0">Preservation (Nature Detected)</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                If the object is classified as nature, the scooper remains raised, and the robot
                executes a navigation maneuver to go around the element, ensuring the ecosystem
                remains undisturbed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
