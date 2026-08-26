"use client";

import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Target,
    label: "Strategic Focus",
    description: "Every campaign built on data and insight",
  },
  {
    icon: Zap,
    label: "Rapid Execution",
    description: "From concept to launch in record time",
  },
  {
    icon: Users,
    label: "Full-Service Team",
    description: "Designers, developers, and strategists",
  },
  {
    icon: TrendingUp,
    label: "Measurable Growth",
    description: "Results you can see and scale",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-transparent rounded-2xl p-12 flex items-center justify-center relative overflow-hidden border border-foreground/5">
              {/* Large QVEKA typography as visual element */}
              <div className="text-center">
                <h2 className="font-syne text-6xl md:text-8xl font-bold text-foreground/10 mb-4">
                  QVEKA
                </h2>
                <div className="font-mono text-sm text-foreground/40 uppercase tracking-widest">
                  Independent Agency
                </div>
                <div className="mt-8 flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-accent-primary" />
                  <span className="font-mono text-xs text-accent-primary">Est. 2024</span>
                  <div className="h-px w-12 bg-accent-primary" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-secondary/5 rounded-full translate-x-1/2 translate-y-1/2" />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-accent-primary/10 rounded-full px-4 py-2 mb-6">
              <span className="font-mono text-xs font-medium text-accent-primary uppercase tracking-wider">
                About Us
              </span>
            </div>

            <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              We're not just an agency.
              <br />
              <span className="text-foreground/60">We're your growth partner.</span>
            </h2>

            <p className="font-sans text-lg text-foreground/70 leading-relaxed mb-8">
              Qveka brings together the best of brand strategy, software development,
              and creative promotion under one roof. We work with companies who need more
              than templates — they need solutions built for their exact challenge.
            </p>

            <p className="font-sans text-lg text-foreground/70 leading-relaxed mb-12">
              Whether it's a campaign on LinkedIn, a new web platform, or a full rebrand,
              we move fast and deliver work that stands out.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-accent-primary" />
                      </div>
                      <div>
                        <h3 className="font-syne text-base font-semibold text-foreground mb-1">
                          {stat.label}
                        </h3>
                        <p className="font-sans text-sm text-foreground/60">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}