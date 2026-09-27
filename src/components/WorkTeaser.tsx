"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { workPosts } from "@/data/work";
import WorkCard from "./WorkCard";

export default function WorkTeaser() {
  const preview = workPosts.slice(0, 3);

  return (
    <section className="bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="mb-10 md:mb-14 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-0.5 bg-blue-600 rounded-full mb-8"
          />
          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide">
            Our Work
          </div>
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-7">
            Creator posts that <span className="text-blue-600">moved markets</span>
          </h2>
          <p className="font-sans text-base md:text-xl text-foreground/60 leading-relaxed max-w-3xl">
            Real launches, real engagement. A snapshot of campaigns we amplified
            across X and LinkedIn.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {preview.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <WorkCard post={post} />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-sans font-medium hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View all work
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
