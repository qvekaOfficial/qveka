"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const objectives = [
  {
    num: "01",
    heading: "Make creators genuinely excited about your product.",
    paragraph:
      "If you have an innovative product, we will connect it to the right people to amplify it. Work with industry-leading creators who will authentically integrate it into their content — whether through dedicated videos, newsletters, or social media posts.",
    tags: ["ADVOCACY", "INTEGRATION"],
  },
  {
    num: "02",
    heading: "Get influencer rates optimized for your budget.",
    paragraph:
      "A lot of companies come into this field and let creators dictate their prices. We make sure you keep your creator campaign optimized so you can get maximum deliverables at the best cost. We do that by maintaining recurring prices with ongoing creators and negotiation based on industry standards and current rates.",
    tags: ["PARTNERSHIPS", "EFFICIENCY"],
  },
  {
    num: "03",
    heading: "Optimize campaigns based on ROI, not vanity metrics.",
    paragraph:
      "We work closely with your data to identify which creators, platforms, and content formats drive actual conversions, focusing exclusively on measurable business growth.",
    tags: ["PERFORMANCE", "ANALYTICS"],
  },
];

export default function Objectives() {
  const [active, setActive] = useState(0);

  const activeObj = objectives[active];
  const sideItems = objectives.filter((_, i) => i !== active);

  return (
    <section id="work" className="bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-4">
        {/* Header */}
        <div className="mb-8 md:mb-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-0.5 bg-blue-600 rounded-full mb-8"
          />

          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide">
            Our Objectives
          </div>
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-7">
            We don&apos;t just execute campaigns we{" "}
            <span className="text-blue-600">engineer influence</span>
          </h2>
          <p className="font-sans text-base md:text-xl text-foreground/50 leading-relaxed max-w-3xl mb-2">
            through data, relationships, and unbridled creativity.
          </p>
        </div>

        {/* Desktop layout (>= 1024px): featured card + side thumbnails.
            The active item is promoted out of the rail here on purpose — with
            two columns it reads as a selection, not as reordering. */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Featured large card */}
          <div className="relative overflow-hidden rounded-2xl border border-foreground/5 min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 p-8 md:p-12 lg:p-14 flex flex-col justify-between"
              >
                {/* Big number — behind content, very faint */}
                <div className="absolute -top-4 -left-2 font-syne text-[10rem] md:text-[14rem] lg:text-[18rem] font-bold text-blue-600/[0.06] leading-none select-none pointer-events-none">
                  {activeObj.num}
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <h3 className="font-syne text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-5">
                    {activeObj.heading}
                  </h3>
                  <p className="font-sans text-sm md:text-base lg:text-lg text-foreground/60 leading-relaxed mb-6 max-w-xl">
                    {activeObj.paragraph}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeObj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-blue-600/20 text-blue-600/90 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-[0.12em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Side thumbnails */}
          <div className="flex flex-col gap-4">
            {sideItems.map((obj, i) => {
              const originalIndex = objectives.findIndex(
                (o) => o.num === obj.num,
              );
              return (
                <motion.button
                  key={obj.num}
                  onClick={() => setActive(originalIndex)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative overflow-hidden rounded-xl border border-foreground/5 bg-white/60 backdrop-blur-sm p-5 md:p-6 text-left group hover:border-blue-600/20 hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  {/* Subtle bg on hover */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300 rounded-xl" />

                  <div className="relative z-10">
                    <div className="font-syne text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600/10 leading-none mb-2 select-none">
                      {obj.num}
                    </div>
                    <h4 className="font-syne text-sm md:text-base font-bold text-foreground leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                      {obj.heading}
                    </h4>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {obj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-blue-600/15 text-blue-600/60 rounded-full px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.08em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Active indicator */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-blue-600"
                    >
                      <path
                        d="M3 8h10M9 5l4 3-4 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet layout (< 1024px): accordion.
            Renders every objective in fixed 01/02/03 order — no filtering, so a
            tap never moves a card to the top; it just expands in place. */}
        <div className="lg:hidden flex flex-col gap-4">
          {objectives.map((obj, i) => {
            const isOpen = active === i;
            return (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button
                  onClick={() => setActive(i)}
                  aria-expanded={isOpen}
                  className={`w-full text-left rounded-xl border backdrop-blur-sm p-5 md:p-6 transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "border-blue-600/20 bg-white"
                      : "border-foreground/5 bg-white/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <div className="font-syne text-3xl md:text-4xl font-bold text-blue-600/10 leading-none mb-2 select-none">
                        {obj.num}
                      </div>
                      <h4
                        className={`font-syne text-base md:text-lg font-bold leading-snug transition-colors duration-300 ${
                          isOpen
                            ? "text-blue-700"
                            : "text-foreground line-clamp-2"
                        }`}
                      >
                        {obj.heading}
                      </h4>
                    </div>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  </div>

                  {/* Paragraph expands in place — CSS grid-rows collapse */}
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="font-sans text-sm md:text-base text-foreground/60 leading-relaxed">
                        {obj.paragraph}
                      </p>
                    </div>
                  </div>

                  {/* Tags stay visible in both states */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {obj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-blue-600/15 text-blue-600/60 rounded-full px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.08em]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
