"use client";

import { motion } from "framer-motion";

// khusboo dont want these images to be used in the trusted by section, so commenting them out for now
// "https://framerusercontent.com/images/sOvFV9n2zKVAA9VNV7us8DDYuHk.png",
// "https://framerusercontent.com/images/DCAckiFnouuErEjA4ZLmaaKXamo.jpeg",
const logos = [
  "/leaders_logo_apodex.jpeg",
  "/leaders_logo_luma_ai.jpeg",
  "/leaders_logo_outbox_lab.jpeg",
  "/leaders_logo_omneky.jpeg",
  "/leaders_logo_gamma.jpeg",
  "/leaders_logo_deepseek.jpeg",
  "https://framerusercontent.com/images/Fmc5Fnp5nSpkl0yZGTS8MJD7Ugw.png",
  "https://framerusercontent.com/images/9u4tniv1LQHOhcOJDRLegGiFZ48.jpg",
  "https://framerusercontent.com/images/MGItyAxn4s2MsEyzc4aKCObtauI.png",
  "https://framerusercontent.com/images/UpW5YLUQlGoa3rIFn16gROvh5J8.png",
  "https://framerusercontent.com/images/neGqynuVHsCT7aOep5bQIoUMQ.jpeg",
  "https://framerusercontent.com/images/mp8wDjNwy1mC3dL0QGk9JzuGsE.png",
];

const marqueeLogos = [...logos, ...logos];

export default function TrustedBy() {
  return (
    <section className="bg-gradient-to-b from-blue-50/40 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Speciality Block */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          {/* Blue decorative line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-0.5 bg-blue-600 rounded-full mb-8"
          />

          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide">
            Our Speciality
          </div>
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-7">
            <span className="text-blue-600">Product-Led</span> Marketing for AI
            SaaS
          </h2>
          <p className="font-sans text-base md:text-xl text-foreground/60 leading-relaxed max-w-3xl">
            Since late 2022, we’ve been pioneering creator partnerships on X for
            ambitious tech companies. We bridge the gap between
            category-defining SaaS products and trusted industry voices—building
            targeted sponsorship campaigns that don't just generate noise, but
            deliver qualified leads and measurable growth.
          </p>
        </div>

        {/* Trusted By Marquee */}
        <div>
          <div className="font-mono text-sm md:text-base text-blue-900/30 mb-10 tracking-wide font-medium">
            Trusted by industry leaders
          </div>

          <style jsx global>{`
            @keyframes marquee-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .logo-marquee {
              animation: marquee-scroll 30s linear infinite;
              will-change: transform;
            }
          `}</style>

          <div className="relative overflow-hidden">
            {/* Soft edge fades */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-blue-50/40 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-blue-50/40 to-transparent z-10 pointer-events-none" />

            <div className="flex items-center gap-20 md:gap-28 logo-marquee">
              {marqueeLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  // className="h-10 md:h-12 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 hover:brightness-110 transition-all duration-500 shrink-0"
                  className="h-10 md:h-12 w-auto object-contain grayscale-0 opacity-100 brightness-110 transition-all duration-500 shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
