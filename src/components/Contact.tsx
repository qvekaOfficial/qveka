"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyWebsite: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  // Honeypot: hidden from people, filled in by bots.
  const [website, setWebsite] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const validate = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.fullName.trim()) newErrors.fullName = true;
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    )
      newErrors.email = true;
    if (!formData.companyWebsite.trim()) newErrors.companyWebsite = true;
    if (!formData.budget) newErrors.budget = true;
    if (!formData.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setSubmitError(
          response.status === 429
            ? "Too many submissions. Please try again in a few minutes."
            : (body.error ??
                "Something went wrong. Please try again, or email us directly."),
        );
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        companyWebsite: "",
        budget: "",
        message: "",
      });
      setErrors({});
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch {
      setIsLoading(false);
      setSubmitError(
        "Could not reach the server. Check your connection and try again.",
      );
    }
  };

  const waveUp = (i: number) => ({
    initial: { opacity: 0, y: 30, rotateX: 10 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  });

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background glow rings */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Heading + Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
          >
            <div className="max-w-4xl mb-6">
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 48 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-0.5 rounded-full bg-blue-600 mb-6 md:mb-8"
              />

              <div className="font-mono text-xs tracking-wide text-foreground/40 md:text-sm">
                Contact Form
              </div>
            </div>

            <h2 className="font-syne text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95] mb-8 tracking-tight">
              Get In Touch
              <br />
              <span className="text-blue-700">Today</span>
            </h2>

            <p className="font-sans text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-lg">
              Ready to put your product in front of the right audience?
              <br />
              Tell us what you're launching and we'll build a creator campaign
              around it.
            </p>
          </motion.div>

          {/* Right - Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-blue-100 shadow-2xl shadow-blue-900/5 p-8 md:p-10 overflow-hidden">
              {/* Card glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 right-0 h-px w-32 bg-gradient-to-l from-red-500/50 to-transparent pointer-events-none" />

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Full Name */}
                  <motion.div {...waveUp(0)}>
                    <label
                      htmlFor="fullName"
                      className="block font-sans text-sm font-semibold text-foreground mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Jane Doe*"
                      className={`w-full px-4 py-3.5 bg-background border rounded-xl font-sans text-sm text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:-translate-y-0.5 ${errors.fullName ? "border-red-500 ring-2 ring-red-500/20 animate-[shake_0.4s_ease-in-out]" : "border-foreground/10 focus:border-blue-400"}`}
                    />
                    {errors.fullName && (
                      <span className="text-red-500 text-xs font-mono mt-1 block">
                        Required
                      </span>
                    )}
                  </motion.div>

                  {/* Email */}
                  <motion.div {...waveUp(1)}>
                    <label
                      htmlFor="email"
                      className="block font-sans text-sm font-semibold text-foreground mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com*"
                      className={`w-full px-4 py-3.5 bg-background border rounded-xl font-sans text-sm text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:-translate-y-0.5 ${errors.email ? "border-red-500 ring-2 ring-red-500/20 animate-[shake_0.4s_ease-in-out]" : "border-foreground/10 focus:border-blue-400"}`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-mono mt-1 block">
                        Valid email required
                      </span>
                    )}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Company Website */}
                  <motion.div {...waveUp(2)}>
                    <label
                      htmlFor="companyWebsite"
                      className="block font-sans text-sm font-semibold text-foreground mb-2"
                    >
                      Company website
                    </label>
                    <input
                      id="companyWebsite"
                      name="companyWebsite"
                      type="url"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="Your company website*"
                      className={`w-full px-4 py-3.5 bg-background border rounded-xl font-sans text-sm text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:-translate-y-0.5 ${errors.companyWebsite ? "border-red-500 ring-2 ring-red-500/20 animate-[shake_0.4s_ease-in-out]" : "border-foreground/10 focus:border-blue-400"}`}
                    />
                    {errors.companyWebsite && (
                      <span className="text-red-500 text-xs font-mono mt-1 block">
                        Required
                      </span>
                    )}
                  </motion.div>

                  {/* Budget Dropdown */}
                  <motion.div {...waveUp(3)}>
                    <label
                      htmlFor="budget"
                      className="block font-sans text-sm font-semibold text-foreground mb-2"
                    >
                      Your budget
                    </label>
                    <div className="relative">
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 bg-background border rounded-xl font-sans text-sm text-foreground transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:-translate-y-0.5 appearance-none cursor-pointer ${errors.budget ? "border-red-500 ring-2 ring-red-500/20 animate-[shake_0.4s_ease-in-out]" : "border-foreground/10 focus:border-blue-400"}`}
                      >
                        <option value="">(Select Range…)</option>
                        <option value="under5">Under $5K</option>
                        <option value="5to10">$5K - $10K</option>
                        <option value="10to20">$10K - $20K</option>
                        <option value="20to50">$20K - $50K</option>
                        <option value="50to100">$50K - $100K</option>
                        <option value="100plus">$100K+</option>
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40">
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            d="M1 1.5L6 6.5L11 1.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.budget && (
                      <span className="text-red-500 text-xs font-mono mt-1 block">
                        Select a budget
                      </span>
                    )}
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div {...waveUp(4)} className="mb-8">
                  <label
                    htmlFor="message"
                    className="block font-sans text-sm font-semibold text-foreground mb-2"
                  >
                    What are you looking to promote?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your message here..."
                    className={`w-full px-4 py-3.5 bg-background border rounded-xl font-sans text-sm text-foreground placeholder:text-foreground/30 transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg focus:shadow-blue-600/10 focus:-translate-y-0.5 resize-none ${errors.message ? "border-red-500 ring-2 ring-red-500/20 animate-[shake_0.4s_ease-in-out]" : "border-foreground/10 focus:border-blue-400"}`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-xs font-mono mt-1 block">
                      Required
                    </span>
                  )}
                </motion.div>

                {/* Honeypot — off-screen rather than display:none, which some
                    bots skip. Never shown to, or focusable by, real visitors. */}
                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-0 w-px h-px overflow-hidden"
                >
                  <label htmlFor="website">Leave this field empty</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                {submitError && (
                  <p
                    role="alert"
                    className="mb-4 rounded-xl border border-red-500/20 bg-red-50 px-4 py-3 text-red-600 text-xs font-mono"
                  >
                    {submitError}
                  </p>
                )}

                {/* Submit */}
                <motion.div {...waveUp(5)}>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-4 rounded-2xl font-syne font-bold text-xl tracking-tight shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isLoading ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          SUBMIT
                          <ArrowRight className="h-5 w-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </motion.div>
              </form>

              {/* Confetti-style success */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="mt-6 bg-gradient-to-br from-blue-50 to-red-50 border border-blue-100 rounded-2xl p-6 text-center relative overflow-hidden"
                  >
                    {/* Scatter dots */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: -30,
                          x: (i % 2 === 0 ? 20 : -20) + i * 10,
                        }}
                        transition={{
                          delay: i * 0.05 + 0.2,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        className={`absolute w-2 h-2 rounded-full ${i % 3 === 0 ? "bg-blue-500" : i % 3 === 1 ? "bg-red-500" : "bg-violet-500"}`}
                        style={{ top: "40%", left: `${20 + i * 10}%` }}
                      />
                    ))}

                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
                        <Sparkles className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-syne text-xl font-bold text-foreground">
                        Message Sent!
                      </h3>
                      <p className="font-sans text-sm text-foreground/60">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Shake keyframes for validation */}
      <style jsx global>{`
        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-6px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(6px);
          }
        }
      `}</style>
    </section>
  );
}
