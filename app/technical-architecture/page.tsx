import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Technical Architecture",
  description:
    "The hardware and software behind DuneBroom: edge AI vision, the mechanical sieving assembly, drive system, and power design.",
  alternates: { canonical: "/technical-architecture" },
  openGraph: {
    title: "Technical Architecture | DuneBroom",
    description:
      "The hardware and software behind DuneBroom: edge AI vision, the mechanical sieving assembly, drive system, and power design.",
    url: "/technical-architecture",
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

export default function TechnicalArchitecturePage() {
  return (
    <main id="main-content" className="bg-background transition-colors duration-300">
      <section className="py-16 max-w-[860px] mx-auto px-8 text-foreground">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 mt-0">Technical Architecture</h1>
        <p className="text-lg text-muted mb-10 mt-0">Hardware Implementation</p>

        {/* Introduction + Diagram */}
        <div className="pb-8 mb-8 border-b border-border">
          <p className="text-base leading-relaxed text-muted mb-4">
            The DuneBroom robot was engineered using a modular hardware stack defined by specific
            performance constraints. The system is organized into four functional subsystems.
          </p>
          <div className="rounded-md overflow-hidden bg-surface p-4 border border-border">
            <Image
              src="/Figure_2_Hardware_Architecture.png"
              alt="Figure 2: Hardware Architecture"
              sizes="(max-width: 900px) 100vw, 796px"
              width={1336}
              height={1360}
              className="w-full object-contain rounded-md" style={{ width: "100%", height: "auto" }}
            />
            <p className="text-xs text-muted text-center italic mt-2 mb-0">
              Figure 2: Hardware Architecture
            </p>
          </div>
        </div>

        {/* Power System */}
        <div className="pb-8 mb-8 border-b border-border">
          <h2 className="text-xl font-semibold mb-2 mt-0">Power System</h2>
          <p className="text-base leading-relaxed text-muted mb-0">
            A high-capacity battery serves as the central power source, distributing power to the
            motor control module and the Raspberry Pi. The power budget was calculated to sustain
            continuous autonomous operation for <strong>over 1 hour</strong> on a single charge.
          </p>
        </div>

        {/* High-Level Processing */}
        <div className="pb-8 mb-8 border-b border-border">
          <h2 className="text-xl font-semibold mb-2 mt-0">High-Level Processing</h2>
          <p className="text-base leading-relaxed text-muted mb-4">
            This subsystem handles the computationally intensive tasks required to classify objects
            in front of the robot as nature versus trash.
          </p>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg p-5 border-l-4 border-accent bg-surface">
              <h4 className="text-sm font-semibold text-foreground mb-1 mt-0">Raspberry Pi 5</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                Serves as the robot&apos;s primary computer. Executes the YOLOv8 ML model to classify
                objects as &quot;trash&quot; or &quot;nature&quot;. Makes high-level navigation
                decisions and sends commands via serial connection to the Arduino.
              </p>
            </div>
            <div className="rounded-lg p-5 border-l-4 border-accent bg-surface">
              <h4 className="text-sm font-semibold text-foreground mb-1 mt-0">Webcam</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                Connected directly to the Raspberry Pi. Captures a high-resolution image only when
                triggered, providing the visual data necessary for the ML model to differentiate
                between trash and natural elements.
              </p>
            </div>
          </div>
        </div>

        {/* Low-Level Control */}
        <div className="pb-8 mb-8 border-b border-border">
          <h2 className="text-xl font-semibold mb-2 mt-0">Low-Level Control</h2>
          <p className="text-base leading-relaxed text-muted mb-4">
            This subsystem manages real-time sensor data and hardware protocols.
          </p>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg p-5 border-l-4 border-accent bg-surface">
              <h4 className="text-sm font-semibold text-foreground mb-1 mt-0">Arduino Microcontroller</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                Acts as the hardware interface. Manages real-time input/output by reading data from
                the ultrasonic distance sensors and sending signals to the motor control module and
                the scooper&apos;s servo motor.
              </p>
            </div>
            <div className="rounded-lg p-5 border-l-4 border-accent bg-surface">
              <h4 className="text-sm font-semibold text-foreground mb-1 mt-0">Distance Sensors</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                Ultrasonic sensors connected to the Arduino continuously monitor the path for
                obstacles within a 3-inch range. These sensors serve as the hardware
                &quot;trigger&quot; that wakes the vision system.
              </p>
            </div>
            <div className="rounded-lg p-5 border-l-4 border-accent bg-surface">
              <h4 className="text-sm font-semibold text-foreground mb-1 mt-0">Motor Control Module</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                An intermediate driver that interprets signals from the Arduino and uses power from
                the battery to control the motors.
              </p>
            </div>
          </div>
        </div>

        {/* Actuators */}
        <div>
          <h2 className="text-xl font-semibold mb-2 mt-0">Actuators</h2>
          <p className="text-base leading-relaxed text-muted mb-4">
            This subsystem converts electrical signals into physical motion to navigate and clean the
            beach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-surface p-6 rounded-lg border-t-2 border-accent border-l border-border">
              <h4 className="text-sm font-semibold text-foreground mb-2 mt-0">Drivetrain Motors</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                High-torque DC motors operating between 200-300 RPM. These motors drive a tank-tread
                chassis designed to maintain traction on soft sand while achieving a speed of
                approximately 2 km/hr.
              </p>
            </div>
            <div className="bg-surface p-6 rounded-lg border-t-2 border-accent border-l border-border">
              <h4 className="text-sm font-semibold text-foreground mb-2 mt-0">Servo Motor (Scooper Lift)</h4>
              <p className="text-xs text-muted mb-0 leading-relaxed">
                Controls the vertical articulation of the custom 3D-printed scooper. Lowers the
                mechanism to collect identified trash and raises it to avoid drag or navigate over
                natural obstacles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
