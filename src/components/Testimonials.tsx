"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Beatrice Vladut",
    quote:
      "I'll always choose to work with Qveka. They're genuinely one of the most lovely and easy to work with people, and that matters a whole lot.",
    handle: "@tribhuvan-kumar",
    followers: "60K+ followers on Linkedin",
    image:
      "https://framerusercontent.com/images/nsjZAifv0lv7c9KIUe7zY8YcuMQ.jpg",
  },
  {
    name: "Chase Dimond",
    quote:
      "Best in the game. Always a pleasure working with Ori and his team on influencer marketing campaigns.",
    handle: "@tribhuvan-kumar",
    followers: "447k followers on Linkedin",
    image:
      "https://framerusercontent.com/images/NzivDLcVaZYDPOYVxq20UrIqcjI.jpeg",
  },
  {
    name: "Chubby",
    quote:
      "I work with many agencies on sponsorships, but Qveka consistently delivers the smoothest collaboration and execution.",
    handle: "@tribhuvan-kumar",
    followers: "100K+ followers on X",
    image:
      "https://framerusercontent.com/images/w6gMy9X8yLmvhJIWa9hugQgHIg.jpg",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <article className="group relative flex h-[460px] w-[280px] shrink-0 flex-col overflow-hidden rounded-3xl border border-foreground/10 bg-white shadow-[0_10px_40px_-15px_rgba(30,58,138,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_-15px_rgba(220,38,38,0.35)] md:h-[520px] md:w-[420px] lg:h-[560px] lg:w-[460px]">
      {/* Image */}
      <div className="relative h-48 shrink-0 overflow-hidden sm:h-52 md:h-56 lg:h-64">
        <img
          src={t.image}
          alt={t.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 md:p-7">
        {/* Decorative quote mark */}
        <div className="mb-2 font-syne text-4xl leading-none text-blue-600/30 md:text-5xl">
          &ldquo;
        </div>

        <h3 className="mb-3 font-syne text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
          {t.name}
        </h3>

        <p className="mb-5 line-clamp-3 flex-1 font-sans text-sm leading-relaxed text-foreground/70 md:text-base">
          {t.quote}
        </p>

        <div className="flex flex-col gap-1 border-t border-foreground/10 pt-4">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-600 md:text-sm">
            {t.handle}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 md:text-xs">
            {t.followers}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  // Duplicate the array so the track can scroll seamlessly
  const track = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-6 h-0.5 rounded-full bg-blue-600 md:mb-8"
          />

          <div className="mb-3 font-mono text-xs tracking-wide text-foreground/40 md:text-sm">
            The Voices
          </div>

          <h2 className="mb-6 font-syne text-3xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
            What Our <span className="text-blue-600">Creators</span> Say
          </h2>

          <p className="max-w-3xl font-sans text-base leading-relaxed text-foreground/50 md:text-xl">
            Real words from the creators we partner with.
          </p>
        </div>
      </div>

      {/* Marquee track — left-to-right infinite */}
      <div className="relative">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-blue-50/80 to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent md:w-40" />

        <motion.div
          className="flex w-max gap-6 pr-6 md:gap-8 md:pr-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {track.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
