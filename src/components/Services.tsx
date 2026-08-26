"use client";

import { motion } from "framer-motion";
import { Share2, Palette, Code, Megaphone } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Campaigns that engage. Content that converts. We craft strategies for LinkedIn, X, Instagram and beyond.",
    icon: Share2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Brand Strategy & Design",
    description:
      "From visual identity to brand narratives. We build brands that resonate and endure.",
    icon: Palette,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    title: "Software & Web Development",
    description:
      "Custom applications built for scale. From MVPs to enterprise platforms, we deliver.",
    icon: Code,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    title: "Advertising & Campaigns",
    description:
      "Paid media that works. Strategic ad campaigns across all platforms with measurable ROI.",
    icon: Megaphone,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-foreground/10 rounded-full px-4 py-2 mb-6">
            <span className="font-mono text-xs font-medium text-foreground uppercase tracking-wider">
              Services
            </span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Do Best
          </h2>
          <p className="font-sans text-lg text-foreground/70 max-w-2xl mx-auto">
            A complete range of services to elevate your brand and grow your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl p-8 border border-foreground/5 hover:border-foreground/10 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${service.color}`} />
                </div>

                <h3 className="font-syne text-2xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-accent-primary font-sans text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  Learn more
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}