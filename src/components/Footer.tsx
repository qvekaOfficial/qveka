"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PrivacyModal from "./PrivacyModal";
import TermsModal from "./TermsModal";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const words = Array.from({ length: 16 }, () => "qveka");

  return (
    <>
      <footer className="relative overflow-hidden bg-foreground text-background">
        {/* Animated scroll text — right to left, infinite */}
        <div className="relative overflow-hidden border-b border-background/10 py-5 md:py-7">
          <motion.div
            className="flex gap-10 md:gap-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 14,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...words, ...words].map((w, i) => (
              <span
                key={i}
                className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-background/10 uppercase select-none shrink-0"
                style={{ letterSpacing: "-0.05em" }}
              >
                {w}
                <span className="mx-6 md:mx-10 text-blue-600/40">,</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* Everything in one line */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-8">
          <div className="flex flex-wrap xl:flex-nowrap items-center justify-between gap-4 lg:gap-8">
            {/* Logo */}
            <a href="#" className="shrink-0">
              <div className="font-syne text-2xl md:text-3xl font-bold tracking-tight text-background leading-none">
                QVEKA<span className="text-red-600 font-mono">.</span>
              </div>
            </a>

            {/* Copyright */}
            <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-background/30 whitespace-nowrap shrink-0">
              © 2026 Qveka. ALL RIGHTS RESERVED.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-6 xl:gap-8 shrink-0">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-syne text-sm md:text-base font-semibold text-background/60 hover:text-blue-400 transition-colors tracking-tight"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-syne text-sm md:text-base font-semibold text-background/60 hover:text-red-500 transition-colors tracking-tight"
              >
                Twitter
              </a>
            </div>

            {/* Modal links */}
            <div className="flex items-center gap-4 shrink-0">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-background/40 hover:text-blue-400 hover:underline underline-offset-4 transition-all duration-200"
              >
                Privacy Policy
              </button>
              <p className="font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-background/40">
                |
              </p>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-background/40 hover:text-red-500 hover:underline underline-offset-4 transition-all duration-200"
              >
                Terms Of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </>
  );
}
