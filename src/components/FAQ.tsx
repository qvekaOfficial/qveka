"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "WHICH PLATFORMS DO YOU GUYS WORK WITH?",
    answer:
      "We work with X (formerly Twitter), LinkedIn, YouTube, short-form video on Instagram and TikTok, newsletters, podcasts, and more. Basically everywhere content is being made, we can put you and your brand in the discussion.",
  },
  {
    question: "HOW DOES THE CREATOR APPROVAL PROCESS WORK?",
    answer:
      "We offer two approaches. You can let our team handle approvals and simply receive a notification when posts go live. Or, you can receive notifications when drafts are ready and give direct feedback to the creator before anything is published. Totally up to you — hands-off or fully involved, we make it work either way.",
  },
  {
    question: "WHAT DO YOUR PRICING PACKAGES LOOK LIKE?",
    answer:
      "Our pricing covers both the agency fee and creator compensation. We maintain strong relationships with creators and negotiate rates that are at or below market standard — meaning the price you pay is the same as, or better than, what you'd get if you reached out to them yourself from scratch. For some campaigns we work on a fixed commission based on the total budget allocated.",
  },
  {
    question: "WHAT ARE YOUR STRUCTURED COMMISSIONS?",
    answer:
      "We charge a percentage of the budget allocated. As of now, we don't charge any fixed fee. Because we only charge a percentage of the allocated budget and we negotiate better creator rates, our commission is effectively absorbed into the improved pricing, so it stays cost-neutral for the client.",
  },
  {
    question: "HOW DO YOU MEASURE CAMPAIGN PERFORMANCE?",
    answer:
      "We track three core metrics:\n\n- CPM: We monitor the cost per thousand impressions for each post and benchmark it against creator and industry standards.\n\n- Engagements: We measure the quality and volume of engagements each post generates.\n\n- Clicks and conversions: We track actual clicks and conversions using UTM parameters and link shorteners.",
  },
  {
    question: "DO YOU HANDLE CREATOR CONTRACTS AND PAYMENTS?",
    answer:
      "Yes. We draft and manage all creator agreements, handle payment processing, and make sure deliverables are delivered on time. You deal with one invoice from us — not a dozen from individual creators.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 48 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="h-0.5 bg-blue-600 rounded-full mb-8"
          />

          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide uppercase">
            Good To Know
          </div>
          <h2 className="font-syne text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            Your Questions, <span className="text-blue-600">Answered</span>
          </h2>
          <p className="font-sans text-base md:text-xl text-foreground/50 leading-relaxed max-w-3xl">
            We've compiled the most common questions we get about working with us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="divide-y divide-foreground/5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/60 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 rounded-2xl hover:bg-white/80 transition-colors duration-200"
              >
                <h3 className="font-syne text-lg font-bold text-foreground text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-blue-600 shrink-0" />
                </motion.div>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${openIndex === index ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"}`}
              >
                <div className="min-h-0">
                  <div className="px-6 pt-2">
                    {faq.answer.split("\n\n").map((paragraph, paragraphIndex) => {
                      const lines = paragraph.split("\n");
                      const isList = lines.every((l) => l.startsWith("- "));
                      if (isList) {
                        return (
                          <ul key={paragraphIndex} className="ml-4 list-disc space-y-2 mb-3 last:mb-0">
                            {lines.map((line, lineIndex) => (
                              <li key={lineIndex} className="font-sans text-sm text-foreground/60 leading-relaxed">
                                {line.substring(2)}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return (
                        <p key={paragraphIndex} className="font-sans text-sm text-foreground/60 leading-relaxed mb-3 last:mb-0">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
