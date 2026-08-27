"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "Meridian Brand Launch",
    category: "Brand Identity",
    year: "2025",
  },
  {
    title: "Atlas Tech Platform",
    category: "Web Development",
    year: "2025",
  },
  {
    title: "Verdant Campaign",
    category: "Advertising",
    year: "2024",
  },
  {
    title: "North Peak Strategy",
    category: "Strategy",
    year: "2024",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-muted px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-4">
            Selected Work
          </h2>
          <p className="font-sans text-lg text-foreground/70 max-w-2xl">
            Projects that define how we build brands, products, and campaigns that move people.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((item, i) => (
            <a
              key={i}
              href="#case-studies"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#case-studies")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group bg-white rounded-2xl p-8 md:p-10 border border-foreground/5 hover:border-foreground/10 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-xs text-foreground/40 uppercase tracking-wider">{item.year}</span>
                <ArrowUpRight className="h-5 w-5 text-foreground/20 group-hover:text-accent-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="font-syne text-2xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="font-sans text-foreground/60">{item.category}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
