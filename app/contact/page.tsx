"use client";

import { useState } from "react";
import { socialLinks } from "../../components/socialLinks";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Send the form's own fields, so Formspree also sees the `_gotcha`
      // honeypot below and drops submissions from bots that fill it in.
      const response = await fetch("https://formspree.io/f/xnnvbrzq", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.currentTarget),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main id="main-content" className="bg-background transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-12 text-center px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Contact</h1>
        <p className="text-lg text-muted max-w-xl mx-auto">
          Have any questions or suggestions? Get in touch!
        </p>
      </section>

      {/* Content */}
      <section className="pb-24 px-8">
        <div className="max-w-[900px] mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-surface border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            {status === "success" ? (
              <div className="bg-card-bg border border-border rounded-md p-6 text-center">
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  stroke="var(--accent)"
                  viewBox="0 0 24 24"
                  className="mx-auto mb-3 block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold mb-2">Message sent!</p>
                <p className="text-sm text-muted">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-accent underline text-sm hover:text-accent/80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-subtle mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-subtle mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="form-input w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-subtle mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message..."
                    className="form-input w-full resize-y"
                  />
                </div>

                {/* Honeypot: hidden from people, filled in by spam bots */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 dark:bg-red-950 dark:border-red-900 dark:text-red-300 px-4 py-3 rounded-md text-sm">
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-accent text-on-accent font-semibold rounded-md py-3 px-6 border-none cursor-pointer transition-opacity hover:opacity-90 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "loading" && (
                    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  )}
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-7">
            <div className="bg-surface border border-border rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Other Ways to Reach Me</h2>
              <div className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="var(--muted)"
                  viewBox="0 0 24 24"
                  className="mt-1 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted">groverneev at gmail dot com</p>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-lg p-8">
              <h2 className="text-xl font-bold mb-4">Connect on Social</h2>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-12 h-12 rounded-md border border-border bg-card-bg flex items-center justify-center hover:border-muted transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
