"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-background/10 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="font-syne text-2xl font-bold tracking-tight mb-2">
            QVEKA<span className="text-secondary font-mono">.</span>
          </div>
          <p className="font-sans text-sm text-background/60">
            Independent agency for promotion, brand strategy and software.
          </p>
        </div>

        <div className="flex items-center gap-8 font-sans text-sm text-background/70">
          <a href="#about" className="hover:text-background transition-colors">About</a>
          <a href="#approach" className="hover:text-background transition-colors">Approach</a>
          <a href="#services" className="hover:text-background transition-colors">Services</a>
          <a href="#work" className="hover:text-background transition-colors">Work</a>
          <a href="#contact" className="hover:text-background transition-colors">Contact</a>
        </div>

        <div className="font-mono text-xs text-background/40">
          © {currentYear} Qveka Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}