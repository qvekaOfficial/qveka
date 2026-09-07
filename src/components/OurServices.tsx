"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    subsection: "Complete A-Z Influencer Marketing",
    heading: "COMPLETE A-Z INFLUENCER MARKETING",
    paragraph:
      "We curate a highly targeted creator list, negotiate the best rates, ensure top-quality content creation, optimize for peak performance, secure long-term partnerships with successful creators, and continuously test new concepts and formats.",
    tags: [
      "B2B INFLUENCER MARKETING",
      "CREATOR PARTNERSHIPS",
      "CREATOR-LED GROWTH",
      "INFLUENCER ROI TRACKING",
    ],
    image: "/services_1_Complete_A_Z_influencer_marketing.jpeg",
  },
  {
    num: "02",
    subsection: "Launches on X and LinkedIn",
    heading: "LAUNCHES ON X AND LINKEDIN",
    paragraph:
      "Whether you're announcing new fundraising, a product launch, or new features — we'll help you break through the algorithm and become a trending topic.",
    tags: [
      "PRODUCT LAUNCH MARKETING",
      "X LAUNCH CAMPAIGN",
      "LINKEDIN LAUNCH STRATEGY",
      "GO-TO-MARKET SOCIAL",
    ],
    image:
      "/services_2_Launches_on_X_and_LinkedIn.jpeg",
  },
  {
    num: "03",
    subsection: "Curated Creator Talent Headhunting",
    heading: "CURATED CREATOR TALENT HEADHUNTING",
    paragraph:
      "Want us to activate a specific creator for you? We have thousands of creators in our network—so you can utilize us as a middleman for your influencer marketing needs if you want to work with a specific creator. We will get everything done for you and only charge you once the creator has successfully posted.",
    tags: [
      "B2B CREATOR SOURCING",
      "SAAS CREATOR TALENT",
      "CREATOR TALENT AGENCY",
      "B2B CREATOR MATCHING",
    ],
    image:
      "/services_3_Curated_creator_talent_headhunting.jpeg",
  },
];

export default function OurServices() {
  return (
    <section id="services" className="bg-linear-to-b from-white to-blue-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-4">
        {/* Header - same style as Objectives for consistency */}
        <div className="mb-8 md:mb-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-0.5 bg-blue-600 rounded-full mb-8"
          />

          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide">
            Our Services
          </div>
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-7">
            We don&apos;t just run campaigns, we{" "}
            <span className="text-blue-600">build growth</span>
          </h2>
          <p className="font-sans text-base md:text-xl text-foreground/50 leading-relaxed max-w-3xl">
            End-to-end influence strategies designed for clients who want real
            results, not vanity metrics.
          </p>
        </div>

        {/* Vertical stacked cards */}
        <div className="flex flex-col gap-8">
          {" "}
          {services.map((service, index) => {
            const imageOnLeft = index % 2 === 0;
            return (
              <motion.article
                key={service.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -2,
                  boxShadow: "0 20px 40px -10px rgba(30,58,138,0.15)",
                }}
                className={`group relative grid grid-cols-1 gap-8 rounded-2xl border border-foreground/5 bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-xl lg:p-8 ${imageOnLeft ? "lg:grid-cols-[280px_1fr]" : "lg:grid-cols-[1fr_280px]"}`}
              >
                {" "}
                {/* Image */}{" "}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-xl bg-blue-50/50 lg:aspect-[5/4] ${imageOnLeft ? "lg:order-1" : "lg:order-2"}`}
                >
                  {" "}
                  <motion.img
                    src={service.image}
                    alt={service.subsection}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />{" "}
                </div>{" "}
                {/* Content */}{" "}
                <div
                  className={`relative flex flex-col justify-center ${imageOnLeft ? "lg:order-2" : "lg:order-1"}`}
                >
                  {" "}
                  {/* Background number */}{" "}
                  <div className="pointer-events-none absolute -top-4 -right-4 select-none font-syne text-[6rem] font-bold leading-none text-blue-600/5 lg:-top-6 lg:-right-6 lg:text-[8rem]">
                    {" "}
                    {service.num}{" "}
                  </div>{" "}
                  <div className="relative z-10">
                    {" "}
                    <h3 className="mb-5 font-syne text-2xl font-bold leading-snug text-foreground md:text-3xl lg:text-4xl">
                      {" "}
                      {service.subsection}{" "}
                    </h3>{" "}
                    <p className="mb-8 font-sans text-sm leading-relaxed text-foreground/60 md:text-base">
                      {" "}
                      {service.paragraph}{" "}
                    </p>{" "}
                    {/* Tags */}{" "}
                    <div className="flex flex-wrap gap-2">
                      {" "}
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-600/20 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-blue-600/90 transition-colors duration-300 group-hover:border-blue-600/40 group-hover:text-blue-700"
                        >
                          {" "}
                          {tag}{" "}
                        </span>
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.article>
            );
          })}{" "}
        </div>
      </div>
    </section>
  );
}
