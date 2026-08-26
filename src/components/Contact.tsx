"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link2, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Log to console as requested
    console.log("Contact Form Submission:", formData);

    // Simulate submission delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-accent-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-background/10 rounded-full px-4 py-2 mb-6">
              <span className="font-mono text-xs font-medium text-background/80 uppercase tracking-wider">
                Get in Touch
              </span>
            </div>

            <h2 className="font-syne text-4xl md:text-5xl font-bold text-background mb-6 leading-tight">
              Ready to Elevate Your Brand?
            </h2>

            <p className="font-sans text-lg text-background/80 leading-relaxed mb-12">
              Let&apos;s talk about your campaign, your product, or your vision. We&apos;re here to help
              you grow.
            </p>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="font-mono text-sm text-background/70 mb-1">Email</div>
                  <a
                    href="mailto:hello@qveka.com"
                    className="text-lg font-sans text-background hover:text-accent-primary transition-colors"
                  >
                    hello@qveka.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="font-mono text-sm text-background/70 mb-4">Connect</div>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-background/70 hover:text-accent-primary transition-colors"
                >
                  <Link2 className="h-5 w-5" />
                  <span className="font-sans text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-background/70 hover:text-accent-primary transition-colors"
                >
                  <ArrowUpRight className="h-5 w-5" />
                  <span className="font-sans text-sm">X / Twitter</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-background/70 hover:text-accent-primary transition-colors"
                >
                  <Link2 className="h-5 w-5" />
                  <span className="font-sans text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block font-sans text-sm font-medium text-background mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background font-sans placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-sans text-sm font-medium text-background mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background font-sans placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block font-sans text-sm font-medium text-background mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background font-sans placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label className="block font-sans text-sm font-medium text-background mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background font-sans focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select a service...</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="brand">Brand Strategy & Design</option>
                  <option value="development">Software & Web Development</option>
                  <option value="advertising">Advertising & Campaigns</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-sans text-sm font-medium text-background mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-background/20 rounded-lg text-background font-sans placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-background text-foreground px-6 py-4 rounded-lg font-sans font-medium hover:bg-background/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group mt-2"
              >
                {isLoading ? "Sending..." : "Send Message"}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-background font-sans text-sm text-center"
                >
                  ✓ Message sent! We&apos;ll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}