"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Share Your Goal",
    desc: "Tell us what you're launching, who you want to reach, and what you want to achieve.",
  },
  {
    num: "02",
    title: "Get Your Creator Shortlist",
    desc: "We curate relevant creators from our network based on your audience, niche, and campaign goals.",
  },
  {
    num: "03",
    title: "Approve Your Creators",
    desc: "Review the shortlist and select the creators that best fit your brand and campaign.",
  },
  {
    num: "04",
    title: "We Manage Everything",
    desc: "From outreach and negotiation to content approvals and scheduling, our team handles the execution.",
  },
  {
    num: "05",
    title: "Campaign Goes Live",
    desc: "Your approved content goes live across the selected creators and platforms at the right time.",
  },
  {
    num: "06",
    title: "Measure the Results",
    desc: "Track your campaign performance with clear reporting on reach, impressions, engagement, and more.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-0.5 bg-blue-600 rounded-full mb-8"
          />

          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide uppercase">
            The Process
          </div>
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            From
            <span className="text-blue-600"> First Call </span>
            to Real Results
          </h2>
          <p className="font-sans text-base md:text-xl text-foreground/50 leading-relaxed max-w-3xl">
            A clear, proven path from first conversation to measurable results.
          </p>
        </div>

        {/* Bingo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.15,
              }}
              className="group relative rounded-2xl border border-foreground/5 bg-white/60 backdrop-blur-sm p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Step number — blue circle that pops in */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.15 + 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-syne text-sm font-bold mb-4"
              >
                {step.num}
              </motion.div>

              <h3 className="font-syne text-lg font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
