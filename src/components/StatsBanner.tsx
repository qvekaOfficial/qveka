"use client";

const stats = [
  { value: "2B+", label: "Impressions" },
  { value: "5,000+", label: "Partnerships" },
  { value: "2,000+", label: "Creator Network" },
  { value: "100K+", label: "Monthly Views" },
  { value: "98%", label: "Retention" },
];

const bannerStats = [...stats, ...stats];

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden pb-8 md:pb-12">
      <style jsx global>{`
        @keyframes tick-rtl {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .tick-rtl {
          display: flex;
          width: max-content;
          gap: 4rem;
          animation: tick-rtl 20s linear infinite;
          will-change: transform;
        }

        @media (min-width: 768px) {
          .tick-rtl {
            gap: 6rem;
            animation-duration: 28s;
          }
        }
      `}</style>

      <div className="relative h-24 overflow-hidden flex items-center">
        <div className="tick-rtl whitespace-nowrap py-3">
          {bannerStats.map((s, i) => (
            <div
              key={`t1-${i}`}
              className="flex items-baseline gap-3 md:gap-5 shrink-0"
            >
              <span className="font-syne text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                {s.value}
              </span>

              <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}