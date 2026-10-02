"use client";

import { motion } from "framer-motion";
import { logoUrls as logos } from "@/lib/cloudinary-assets";

const marqueeLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="bg-gradient-to-b from-blue-50/40 to-white overflow-hidden">
      {" "}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {" "}
        {/* Speciality Block */}{" "}
        <div className="mb-16 md:mb-20 max-w-4xl">
          {" "}
          {/* Blue decorative line */}{" "}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-0.5 bg-blue-600 rounded-full mb-8"
          />{" "}
          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide">
            {" "}
            Our Speciality{" "}
          </div>{" "}
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-7">
            {" "}
            <span className="text-blue-600">Creator-Led</span> Growth for AI &
            SaaS{" "}
          </h2>{" "}
          <p className="font-sans text-base md:text-xl text-foreground/60 leading-relaxed max-w-3xl">
            Qveka connects AI, SaaS and technology brands with high-reach
            creators across X and LinkedIn to amplify product launches,
            campaigns and announcements.
          </p>{" "}
        </div>{" "}
        {/* Trusted By Marquee */}{" "}
        <div>
          {" "}
          <div className="font-mono text-sm md:text-base text-blue-900/30 mb-10 tracking-wide font-medium">
            {" "}
            Brands & campaigns we&apos;ve worked with{" "}
          </div>{" "}
          <style jsx global>{`
            @keyframes marquee-scroll {
              from {
                transform: translate3d(0, 0, 0);
              }
              to {
                transform: translate3d(-50%, 0, 0);
              }
            }
            .logo-marquee {
              display: flex;
              width: max-content;
              animation: marquee-scroll 30s linear infinite;
              will-change: transform;
            }
            .logo-marquee-group {
              display: flex;
              align-items: center;
              flex-shrink: 0;
              gap: 3.5rem;
              padding-right: 3.5rem;
            }
            @media (min-width: 768px) {
              .logo-marquee {
                animation-duration: 30s;
              }
              .logo-marquee-group {
                gap: 7rem;
                padding-right: 7rem;
              }
            }
            @media (prefers-reduced-motion: reduce) {
              .logo-marquee {
                animation-play-state: paused;
              }
            }
          `}</style>{" "}
          <div className="relative overflow-hidden">
            {" "}
            {/* Soft edge fade - left */}{" "}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-blue-50/40 to-transparent z-10 pointer-events-none" />{" "}
            {/* Soft edge fade - right */}{" "}
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-blue-50/40 to-transparent z-10 pointer-events-none" />{" "}
            {/* Moving track */}{" "}
            <div className="logo-marquee">
              {" "}
              {/* First copy */}{" "}
              <div className="logo-marquee-group">
                {" "}
                {marqueeLogos.map((logo, index) => (
                  <img
                    key={`logo-1-${index}`}
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-10 md:h-12 w-auto object-contain shrink-0 grayscale-0 opacity-100 brightness-110 transition-all duration-500"
                  />
                ))}{" "}
              </div>{" "}
              {/* Exact duplicate */}{" "}
              <div className="logo-marquee-group">
                {" "}
                {marqueeLogos.map((logo, index) => (
                  <img
                    key={`logo-2-${index}`}
                    src={logo}
                    alt={`Partner logo ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="h-10 md:h-12 w-auto object-contain shrink-0 grayscale-0 opacity-100 brightness-110 transition-all duration-500"
                  />
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
