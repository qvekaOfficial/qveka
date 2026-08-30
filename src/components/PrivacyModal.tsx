"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    heading: "1. INTRODUCTION",
    body: `Qveka ("we," "us," or "our") operates the website qveka.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.`,
  },
  {
    heading: "2. INFORMATION WE COLLECT",
    subSections: [
      {
        sub: "INFORMATION YOU PROVIDE TO US",
        body: `We may collect information that you voluntarily provide when you:\n\n• Fill out a contact form or inquiry form\n\n• Subscribe to our newsletter or mailing list\n\n• Communicate with us via email or other channels\n\n• Engage with us on social media\n\nThis information may include your name, email address, company name, job title, phone number, and any other details you choose to provide.`,
      },
      {
        sub: "INFORMATION COLLECTED AUTOMATICALLY",
        body: `When you visit our website, we may automatically collect certain information, including:\n\n• Your IP address\n\n• Browser type and version\n\n• Operating system\n\n• Referring URLs\n\n• Pages viewed and time spent on those pages\n\n• Date and time of your visit`,
      },
    ],
  },
  {
    heading: "3. USE OF YOUR INFORMATION",
    body: `We may use the information we collect for purposes including:\n\n• Responding to your inquiries and requests\n\n• Sending you marketing and promotional communications (with your consent)\n\n• Improving our website and services\n\n• Analyzing usage trends and website performance\n\n• Complying with legal obligations`,
  },
  {
    heading: "4. COOKIES AND TRACKING TECHNOLOGIES",
    body: `Our website may use cookies, web beacons, and similar tracking technologies to collect information about your browsing activity. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the website.`,
  },
  {
    heading: "5. THIRD-PARTY SERVICES",
    body: `We may use third-party service providers to assist with website analytics, email marketing, and other business functions. These providers may have access to your information only to perform tasks on our behalf and are obligated to protect your data.\n\nExamples of third-party services we may use include Google Analytics, email marketing platforms, and social media tools.`,
  },
  {
    heading: "6. SHARING OF YOUR INFORMATION",
    body: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following situations:\n\n• With service providers who assist in operating our business\n\n• To comply with legal obligations, court orders, or governmental requests\n\n• To protect and defend our rights or property\n\n• With your consent or at your direction`,
  },
  {
    heading: "7. DATA RETENTION",
    body: `We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.`,
  },
  {
    heading: "8. DATA SECURITY",
    body: `We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: "9. YOUR RIGHTS",
    body: `Depending on your location, you may have the following rights regarding your personal information:\n\n• The right to access the personal information we hold about you\n\n• The right to request correction of inaccurate data\n\n• The right to request deletion of your data\n\n• The right to opt out of marketing communications\n\n• The right to withdraw consent where processing is based on consent\n\nTo exercise any of these rights, please contact us at the email address below.`,
  },
  {
    heading: "10. CHILDREN'S PRIVACY",
    body: `Our website is not directed to individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to remove that information.`,
  },
  {
    heading: "11. CHANGES TO THIS POLICY",
    body: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    heading: "12. CONTACT US",
    body: `If you have questions or concerns about this Privacy Policy, please contact us at:\n\nQveka\nEmail: hi@qveka.com\nWebsite: qveka.com`,
  },
];

function renderBody(text: string) {
  return text.split("\n\n").map((para, i) => (
    <p key={i} className="font-sans text-sm text-foreground/70 leading-relaxed mb-4 last:mb-0 whitespace-pre-line">
      {para}
    </p>
  ));
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-auto md:max-w-2xl md:w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-foreground/10 px-8 py-6 flex items-start justify-between gap-4 rounded-t-3xl">
              <div>
                <div className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">
                  Effective Date: 30 Aug 2026
                </div>
                <h2 className="font-syne text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                  Privacy Policy
                </h2>
                <div className="font-mono text-xs text-foreground/40 uppercase tracking-widest mt-1">
                  Website: http://qveka.com &nbsp;|&nbsp; Company: Qveka
                </div>
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-200 mt-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-8 py-7 space-y-6">
              {sections.map((section, i) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {section.subSections ? (
                    <>
                      <h3 className="font-syne text-base font-bold text-foreground mb-3 uppercase tracking-tight">
                        {section.heading}
                      </h3>
                      {section.subSections.map((sub) => (
                        <div key={sub.sub} className="mb-4">
                          <h4 className="font-mono text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">
                            {sub.sub}
                          </h4>
                          {renderBody(sub.body)}
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <h3 className="font-syne text-base font-bold text-foreground mb-3 uppercase tracking-tight">
                        {section.heading}
                      </h3>
                      {renderBody(section.body ?? "")}
                    </>
                  )}
                </motion.section>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
