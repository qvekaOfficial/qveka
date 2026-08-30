"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    heading: "EFFECTIVE DATE: 30 AUG 2026",
    meta: "WEBSITE: http://qveka.com  |  COMPANY: Qveka",
  },
  {
    heading: "1. ACCEPTANCE OF TERMS",
    body: `By accessing or using the website qveka.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Site. Qveka ("we," "us," or "our") reserves the right to modify these Terms at any time, and your continued use of the Site constitutes acceptance of any changes.`,
  },
  {
    heading: "2. DESCRIPTION OF SERVICES",
    body: `Qveka provides social media amplification, content creation, and related marketing services. The Site serves as an informational resource about our services and a point of contact for prospective and current clients.`,
  },
  {
    heading: "3. USE OF THE SITE",
    body: `You agree to use the Site only for lawful purposes and in a manner that does not infringe upon or restrict the rights of others. You agree not to:\n\n• Use the Site in any way that violates applicable local, state, national, or international law\n\n• Attempt to gain unauthorized access to any part of the Site or its systems\n\n• Transmit any viruses, malware, or other harmful code\n\n• Use automated tools to scrape, crawl, or extract data from the Site without our written permission\n\n• Misrepresent your identity or affiliation when communicating through the Site`,
  },
  {
    heading: "4. INTELLECTUAL PROPERTY",
    body: `All content on the Site, including but not limited to text, graphics, logos, images, audio, video, and software, is the property of Qveka or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.\n\nYou may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise use any content from the Site without our prior written consent.`,
  },
  {
    heading: "5. USER-SUBMITTED CONTENT",
    body: `If you submit any content to us through the Site (such as messages via contact forms), you grant Qveka a non-exclusive, royalty-free right to use that content for the purpose of responding to your inquiry and conducting our business operations.\n\nYou represent that any content you submit does not violate the rights of any third party.`,
  },
  {
    heading: "6. THIRD-PARTY LINKS",
    body: `The Site may contain links to third-party websites or services. These links are provided for your convenience only. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party sites. You access third-party sites at your own risk.`,
  },
  {
    heading: "7. DISCLAIMER OF WARRANTIES",
    body: `The Site and all content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.\n\nTo the fullest extent permitted by law, Qveka disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`,
  },
  {
    heading: "8. LIMITATION OF LIABILITY",
    body: `To the fullest extent permitted by applicable law, Qveka and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Site, even if we have been advised of the possibility of such damages.\n\nOur total liability for any claim arising out of or relating to these Terms or the Site shall not exceed the amount you paid to us, if any, during the twelve (12) months preceding the claim.`,
  },
  {
    heading: "9. INDEMNIFICATION",
    body: `You agree to indemnify, defend, and hold harmless Qveka and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with your use of the Site or any violation of these Terms.`,
  },
  {
    heading: "10. GOVERNING LAW",
    body: `These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising under these Terms shall be resolved in the courts of competent jurisdiction.`,
  },
  {
    heading: "11. TERMINATION",
    body: `We reserve the right to suspend or terminate your access to the Site at any time, without notice, for any reason, including but not limited to a violation of these Terms.`,
  },
  {
    heading: "12. SEVERABILITY",
    body: `If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    heading: "13. ENTIRE AGREEMENT",
    body: `These Terms, together with our Privacy Policy, constitute the entire agreement between you and Qveka regarding your use of the Site and supersede any prior agreements.`,
  },
  {
    heading: "14. CONTACT US",
    body: `If you have questions about these Terms of Service, please contact us at:\n\nQveka\nEmail: hi@qveka.com\nWebsite: qveka.com`,
  },
];

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-50 w-auto md:max-w-2xl md:w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 z-10 bg-white border-b border-foreground/10 px-8 py-6 flex items-start justify-between gap-4 rounded-t-3xl">
              <div>
                <div className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">
                  Effective Date: 30 Aug 2026
                </div>
                <h2 className="font-syne text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                  Terms of Service
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

            <div className="px-8 py-7 space-y-6">
              {sections.map((section, i) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {section.meta ? (
                    <div className="mb-4">
                      <h3 className="font-syne text-lg font-bold text-foreground tracking-tight leading-snug mb-1">
                        {section.heading}
                      </h3>
                      <p className="font-mono text-xs text-blue-600 uppercase tracking-widest">{section.meta}</p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-syne text-base font-bold text-foreground mb-3 uppercase tracking-tight">
                        {section.heading}
                      </h3>
                      <div className="font-sans text-sm text-foreground/70 leading-relaxed whitespace-pre-line">
                        {section.body}
                      </div>
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
