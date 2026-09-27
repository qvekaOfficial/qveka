import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { workPosts } from "@/data/work";

export const metadata: Metadata = {
  title: "Our Work — Qveka",
  description:
    "Creator-led launches and campaigns amplified by Qveka across X and LinkedIn. Browse real posts with engagement.",
};

export default function WorkPage() {
  const totalLikes = workPosts.reduce((s, p) => s + p.likes, 0);
  const totalReposts = workPosts.reduce((s, p) => s + p.reposts, 0);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="pt-32 md:pt-40 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs md:text-sm text-foreground/40 mb-3 tracking-wide">
            Our Work
          </div>
          <h1 className="font-syne text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
            Posts that <span className="text-blue-600">performed</span>
          </h1>
          <p className="font-sans text-base md:text-xl text-foreground/60 leading-relaxed max-w-3xl mb-8">
            Every card below is a real creator post we helped amplify — click
            any of them for the full breakdown, media and engagement.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.15em]">
            <span className="rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 text-foreground/70">
              {workPosts.length} posts
            </span>
            <span className="rounded-full border border-blue-600/20 bg-blue-600/5 px-4 py-2 text-blue-700">
              {(totalLikes / 1000).toFixed(1)}k total likes
            </span>
            <span className="rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 text-red-600">
              {(totalReposts / 1000).toFixed(1)}k total reposts
            </span>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workPosts.map((post) => (
            <WorkCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
