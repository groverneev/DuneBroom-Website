import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dunebroom.com"),
  title: {
    default: "DuneBroom | Autonomous Beach-Cleaning Robot",
    template: "%s | DuneBroom",
  },
  description:
    "DuneBroom is a low-cost autonomous beach-cleaning robot that combines machine-learning-based vision and mechanical sieving to efficiently identify and collect debris from soft-sand environments.",
  keywords: [
    "robotics",
    "AI",
    "beach cleaning",
    "autonomous robots",
    "edge AI",
    "environmental protection",
    "machine learning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DuneBroom | Autonomous Beach-Cleaning Robot",
    description:
      "Robotics, innovation, and clean oceans. An autonomous robot powered by edge AI to combat beach pollution.",
    type: "website",
    url: "https://dunebroom.com",
    images: [
      {
        url: "/DuneBroom_Robot.jpg",
        width: 1200,
        height: 630,
        alt: "DuneBroom autonomous beach-cleaning robot",
      },
    ],
    locale: "en_US",
    siteName: "DuneBroom",
  },
  twitter: {
    card: "summary_large_image",
    title: "DuneBroom | Autonomous Beach-Cleaning Robot",
    description:
      "Robotics, innovation, and clean oceans. An autonomous robot powered by edge AI to combat beach pollution.",
    images: ["/DuneBroom_Robot.jpg"],
    creator: "@groverneev01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/*
 * Applies the stored theme before first paint so dark-mode visitors don't see
 * a flash of the light theme. ThemeProvider picks up the class on mount.
 */
const themeScript = `
(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased font-sans transition-colors duration-300 ease-in-out">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
