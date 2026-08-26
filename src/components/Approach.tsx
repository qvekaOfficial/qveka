"use client";

import { motion } from "framer-motion";
import { Search, Map, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We learn your brand, audience, and goals through in-depth research",
  },
  {
    icon: Map,
    step: "02",
    title: "Strategy",
    description: "We craft a tailored roadmap aligned with your vision",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execute",
    description: "We build and launch campaigns with precision and creativity",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Scale",
    description: "We optimize, measure, and grow your results together",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-muted px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-foreground/5 rounded-full px-4 py-2 mb-6">
            <span className="font-mono text-xs font-medium text-foreground/70 uppercase tracking-wider">
              Our Process
            </span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Work
          </h2>
          <p className="font-sans text-lg text-foreground/60 max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Step Number */}
              <span className="font-mono text-5xl font-bold text-foreground/5 absolute top-4 right-6 group-hover:text-primary/10 transition-colors">
                {step.step}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-syne text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
