"use client";

const stats = [
  { value: "2B+", label: "Impressions" },
  { value: "5,000+", label: "Partnerships" },
  { value: "2,000+", label: "Creator Network" },
  { value: "100K+", label: "Monthly Views" },
  { value: "98%", label: "Retention" },
];

const bannerStats = [
  ...stats,
  ...stats,
  ...stats,
  ...stats,
  ...stats,
  ...stats,
];

export default function StatsBanner() {
  return (
    <section className="relative overflow-hidden pb-8 md:pb-12">
      {" "}
      {/* py-8 md:py-12 */}
      <style jsx global>{`
        @keyframes tick-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes tick-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .tick-rtl {
          animation: tick-rtl 5s linear infinite;
          will-change: transform;
        }
        .tick-ltr {
          animation: tick-ltr 5s linear infinite;
          will-change: transform;
        }

        @media (min-width: 768px) {
          .tick-rtl {
            animation-duration: 28s;
          }
          .tick-ltr {
            animation-duration: 28s;
          }
        }
      `}</style>
      {/* Single 10° cross — centered with negative offset so tracks cross near middle */}
      <div className="relative h-24 overflow-hidden flex items-center justify-center">
        {" "}
        {/* h-[260px] md:h-[320px]  */}
        {/* Track 1: centered, 10° bottom-right → top-left */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-[90%] mx-auto">
            {" "}
            {/* rotate-[-10deg] */}
            {/* <div className="flex gap-16 md:gap-24 tick-rtl whitespace-nowrap py-3 opacity-70 hover:opacity-100 transition-opacity"> */}
            <div className="flex gap-16 md:gap-24 tick-rtl whitespace-nowrap py-3">
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
        </div>
        {/* Track 2: centered, opposite 10° */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="rotate-[10deg] w-full max-w-[90%] mx-auto">
            <div className="flex gap-16 md:gap-24 tick-ltr whitespace-nowrap py-3 opacity-70 hover:opacity-100 transition-opacity">
              {bannerStats.map((s, i) => (
                <div key={`t2-${i}`} className="flex items-baseline gap-3 md:gap-5 shrink-0">
                  <span className="font-syne text-3xl md:text-5xl font-bold text-foreground tracking-tight">{s.value}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/30">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
