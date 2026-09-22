"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "TESTIMONIALS", href: "#testimonials" },
];

const navLinksForMobile = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "TESTIMONIALS", href: "#testimonials" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, "#hero")}
          className="font-syne text-2xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          QVEKA<span className="text-secondary font-mono">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-sans text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="group inline-flex items-center gap-1.5 bg-foreground text-background px-5 py-2.5 rounded-full text-xs font-mono font-medium hover:bg-foreground/90 transition-all duration-300"
          >
            GET IN TOUCH
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex md:hidden text-foreground hover:opacity-80 transition-opacity focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 stroke-[1.5]" />
          ) : (
            <Menu className="h-6 w-6 stroke-[1.5]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[73px] bg-white h-[95vh] z-40 transition-transform duration-500 ease-in-out border-t border-border flex flex-col justify-between py-12 px-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinksForMobile.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-syne text-3xl font-semibold text-foreground hover:text-primary transition-colors flex items-center justify-between group"
            >
              <span>{link.label}</span>
              <span className="font-mono text-sm text-foreground/45 group-hover:text-primary">
                0{index + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="group flex items-center justify-center gap-2 bg-foreground text-background px-6 py-4 rounded-full text-sm font-mono font-medium hover:bg-foreground/90 transition-colors border border-transparent text-center"
          >
            GET IN TOUCH
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <div className="text-center font-mono text-xs text-foreground/45">
            © {new Date().getFullYear()} Qveka. All rights reserved.
          </div>
        </div>
      </div>
    </nav>
  );
}