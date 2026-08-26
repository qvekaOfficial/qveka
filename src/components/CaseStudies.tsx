"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    client: "TechVenture Inc.",
    industry: "SaaS",
    challenge:
      "Early-stage SaaS needed brand identity and go-to-market strategy for Series A launch.",
    solution:
      "We built their complete brand identity, website, and LinkedIn campaign that generated 500+ qualified leads.",
    results: [
      "Brand identity established",
      "250% increase in inbound leads",
      "Featured in 3 industry publications",
    ],
    metrics: [
      { label: "Lead Generation", value: "+250%" },
      { label: "Brand Awareness", value: "5M impressions" },
      { label: "Conversion Rate", value: "12.5%" },
    ],
    services: ["Brand Strategy", "Web Development", "Social Media"],
    featured: true,
  },
  {
    id: 2,
    client: "GrowthCo",
    industry: "E-commerce",
    challenge:
      "Established brand needed campaign overhaul for competitive market. Declining engagement.",
    solution:
      "Complete content strategy rebrand with targeted ads across Meta and Google. New creative direction.",
    results: [
      "Campaign engagement up 180%",
      "ROAS improved to 4.2x",
      "Community grown by 50K followers",
    ],
    metrics: [
      { label: "Engagement", value: "+180%" },
      { label: "ROAS", value: "4.2x" },
      { label: "Followers", value: "+50K" },
    ],
    services: ["Advertising", "Content Creation", "Strategy"],
    featured: true,
  },
  {
    id: 3,
    client: "LocalBiz Network",
    industry: "B2B Services",
    challenge:
      "No digital presence. Needed full software platform to manage franchise network.",
    solution:
      "Built custom web application with client portal, analytics dashboard, and integration APIs.",
    results: [
      "Platform launched in 4 months",
      "50+ franchises onboarded",
      "Operational costs reduced by 30%",
    ],
    metrics: [
      { label: "Time to Launch", value: "4 months" },
      { label: "Adoption", value: "50+ sites" },
      { label: "Cost Savings", value: "-30%" },
    ],
    services: ["Software Development", "Product Design", "Infrastructure"],
    featured: false,
  },
  {
    id: 4,
    client: "Brand Studio",
    industry: "Creative Agency",
    challenge:
      "Needed to showcase portfolio and generate design leads through website redesign.",
    solution:
      "Created portfolio showcase site with custom animations and blog for thought leadership.",
    results: [
      "Website launched with new design",
      "Organic traffic increased 320%",
      "15+ new client inquiries per month",
    ],
    metrics: [
      { label: "Traffic Growth", value: "+320%" },
      { label: "Inquiries/Month", value: "15+" },
      { label: "Avg. Project Value", value: "+45%" },
    ],
    services: ["Web Design", "Content Strategy", "SEO"],
    featured: false,
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 rounded-full px-4 py-2 mb-6">
            <span className="font-mono text-xs font-medium text-accent-primary uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <h2 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-4">
            Work We're Proud Of
          </h2>
          <p className="font-sans text-lg text-foreground/70 max-w-2xl mx-auto">
            Real results for real businesses. Here's what we've accomplished.
          </p>
        </motion.div>

        {/* Featured Cases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {caseStudies
            .filter((cs) => cs.featured)
            .map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-muted to-white rounded-2xl overflow-hidden border border-foreground/5 hover:border-foreground/10 transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-8 md:p-10">
                  {/* Client & Industry */}
                  <div className="mb-6">
                    <h3 className="font-syne text-3xl font-bold text-foreground mb-2">
                      {caseStudy.client}
                    </h3>
                    <span className="font-mono text-xs text-foreground/50 uppercase tracking-wider">
                      {caseStudy.industry}
                    </span>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-5 mb-8">
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wider">
                        Challenge
                      </h4>
                      <p className="font-sans text-foreground/80 leading-relaxed">
                        {caseStudy.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-foreground/70 mb-2 uppercase tracking-wider">
                        Solution
                      </h4>
                      <p className="font-sans text-foreground/80 leading-relaxed">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8 pb-8 border-b border-foreground/10">
                    <h4 className="font-sans text-sm font-semibold text-foreground/70 mb-4 uppercase tracking-wider">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, i) => (
                        <li
                          key={i}
                          className="font-sans text-foreground/80 flex items-start gap-2"
                        >
                          <TrendingUp className="h-4 w-4 text-accent-primary flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {caseStudy.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="font-syne text-2xl font-bold text-accent-primary mb-1">
                          {metric.value}
                        </div>
                        <div className="font-mono text-xs text-foreground/50">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.services.map((service, i) => (
                      <span
                        key={i}
                        className="font-mono text-xs bg-foreground/5 text-foreground/70 px-3 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Cases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies
            .filter((cs) => !cs.featured)
            .map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl border border-foreground/5 p-6 hover:border-foreground/10 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-syne text-xl font-bold text-foreground">
                      {caseStudy.client}
                    </h3>
                    <span className="font-mono text-xs text-foreground/50">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-foreground/30 group-hover:text-accent-primary transition-colors" />
                </div>

                <p className="font-sans text-sm text-foreground/70 mb-4">
                  {caseStudy.challenge}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {caseStudy.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i}>
                      <div className="font-syne text-lg font-bold text-accent-primary">
                        {metric.value}
                      </div>
                      <div className="font-mono text-xs text-foreground/50">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}