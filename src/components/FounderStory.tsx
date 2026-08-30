"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FounderStory() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden bg-gradient-to-b from-white to-muted/60"
    >
      {/* Subtle decorative faint letter */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none hidden lg:block">
        <span className="font-syne font-extrabold text-[22rem] leading-none text-blue-600/[0.04] tracking-tighter">
          T
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24 relative z-10">
        <div className="max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-7xl"
          >
            {/* Label */}
            <div className="font-mono text-[11px] md:text-xs tracking-[0.2em] text-blue-600 mb-4">
              Founder Story
            </div>

            {/* Main name heading */}
            <h2 className="font-syne text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight mb-1">
              Tribhuvan
            </h2>

            {/* Role */}
            <h4 className="font-mono text-xs md:text-sm tracking-[0.15em] text-foreground/40 mb-10">
              Founder, QVEKA
            </h4>

            {/* Bio paragraphs */}
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-foreground/60 leading-[1.75]">
                I&apos;ve been in influencer marketing since 2019 and moved into B2B influencer marketing in the AI space in late 2022, right when ChatGPT launched. I was one of the first to deploy capital into AI influencers. Because of that early bet, I hold deep relationships with many of the top creators in the space, which allows us to maintain pricing that newer entrants simply can&apos;t access.
              </p>
              <p className="font-sans text-base md:text-lg text-foreground/60 leading-[1.75]">
                Today, the market is flooded with new AI tools launching daily, all eager to activate influencers. That makes it more crucial than ever to work with a partner who truly understands the landscape and knows how to build long-term creator partnerships, not just one-off posts.
              </p>
              <p className="font-sans text-base md:text-lg text-foreground/60 leading-[1.75]">
                Before starting Qveka, I helped double the user base at Bardeen AI in under six months and managed a monthly multi six-figure influencer budget at Chargeflow, where our B2B activations tripled their ROI. As of 2026, we&apos;re managing millions of dollars in annual budget for leading AI companies.
              </p>
              <p className="font-sans text-base md:text-lg text-foreground/60 leading-[1.75]">
                I believe honest work and integrity are the foundation of any lasting partnership. Our goal is simple: my team and I integrate into yours as a fractional influencer marketing function, representing your company like we&apos;ve been there for years.
              </p>
            </div>

            {/* LinkedIn link */}
            <a
              href="https://www.linkedin.com/in/tribhuvan-kumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-10 bg-foreground text-background px-6 py-3 rounded-full font-mono text-xs font-medium hover:bg-foreground/90 transition-all duration-300 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
