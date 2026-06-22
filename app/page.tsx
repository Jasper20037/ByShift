"use client";

import { useState } from "react";
import SideRays from "./components/SideRays";

export default function Home() {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !accepted) return;
    setSubmitted(true);
  };

  return (
    <div className="h-screen overflow-hidden relative">
      {/* SideRays achtergrond */}
      <div className="absolute inset-0">
        <SideRays
          speed={2.5}
          rayColor1="#C8FF00"
          rayColor2="#111111"
          intensity={2.2}
          spread={2.3}
          origin="top-right"
          tilt={0}
          saturation={1.5}
          blend={0.6}
          falloff={1.6}
          opacity={0.9}
        />
      </div>

      {/* Content */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <p className="font-heading text-xs tracking-[0.3em] text-muted uppercase mb-8">
          By Shift
        </p>

        <div className="text-center mb-4 leading-none">
          <h1
            className="font-heading font-bold text-accent leading-none"
            style={{ fontSize: "clamp(5rem, 20vw, 16rem)" }}
          >
            SHIFT
          </h1>
          <p className="font-heading font-light text-foreground text-2xl md:text-3xl tracking-widest uppercase mt-2">
            Coming Soon
          </p>
        </div>

        <p className="font-sans text-muted text-sm text-center max-w-sm mb-10 leading-relaxed mt-6">
          Wij bouwen websites die opvallen.<br />
          Meld je aan en wees de eerste die het weet.
        </p>

        {submitted ? (
          <p className="font-sans text-accent text-sm tracking-wide">
            Genoteerd — we nemen snel contact op.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mailadres"
              required
              className="w-full border border-line bg-background/70 backdrop-blur-sm text-foreground placeholder:text-muted font-sans text-sm px-5 py-4 outline-none focus:border-accent transition-colors"
            />

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="mt-1 accent-accent shrink-0"
              />
              <span className="font-sans text-muted text-xs leading-relaxed">
                Ik accepteer het{" "}
                <a href="#" className="text-accent underline underline-offset-2">
                  privacybeleid
                </a>{" "}
                en wil updates ontvangen.
              </span>
            </label>

            <button
              type="submit"
              disabled={!email || !accepted}
              className="w-full bg-accent text-white dark:text-black font-sans text-sm tracking-widest uppercase py-4 disabled:opacity-30 hover:opacity-90 transition-opacity cursor-pointer disabled:cursor-not-allowed"
            >
              Aanmelden
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
