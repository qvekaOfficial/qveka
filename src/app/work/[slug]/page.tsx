import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Heart,
  Repeat2,
  MessageCircle,
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { workPosts, getWorkPost, formatCount } from "@/data/work";

// All slugs prerendered at build; unknown slugs 404 without a server
// render, so browsing work never triggers a function invocation.
export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return workPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWorkPost(slug);
  if (!post) return { title: "Work — Qveka" };
  return {
    title: `${post.title} — Qveka Work`,
    description: post.text.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.text.slice(0, 200),
      type: "article",
    },
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWorkPost(slug);
  if (!post) notFound();

  const idx = workPosts.findIndex((p) => p.slug === slug);
  const prev = workPosts[(idx - 1 + workPosts.length) % workPosts.length];
  const next = workPosts[(idx + 1) % workPosts.length];
  const related = workPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <article className="pt-28 md:pt-36 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All work
          </Link>

          {/* Author header */}
          <div className="flex items-center gap-4 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.avatar}
              alt={post.author}
              className="h-14 w-14 rounded-full object-cover border border-foreground/10"
            />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 font-syne text-lg font-bold text-foreground">
                {post.author}
                <BadgeCheck className="h-5 w-5 text-blue-600 shrink-0" />
              </div>
              <div className="font-mono text-sm text-foreground/50">
                @{post.handle} · {post.postedAt} ·{" "}
                {post.platform === "x" ? "X" : post.platform}
              </div>
            </div>
            <span className="ml-auto hidden sm:inline-block rounded-full border border-blue-600/20 bg-blue-600/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-blue-700">
              {post.brand}
            </span>
          </div>

          <h1 className="font-syne text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {[
              { icon: Heart, label: "Likes", value: post.likes },
              { icon: Repeat2, label: "Reposts", value: post.reposts },
              { icon: MessageCircle, label: "Replies", value: post.replies },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2.5 rounded-2xl border border-foreground/10 bg-foreground/[0.02] px-5 py-3"
              >
                <Icon className="h-4 w-4 text-blue-600" />
                <span className="font-syne text-lg font-bold text-foreground">
                  {formatCount(value)}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/50">
                  {label}
                </span>
              </div>
            ))}
            <a
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl bg-foreground px-5 py-3 font-sans text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              View original post
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Media */}
          {post.mediaType === "video" && post.mediaUrl ? (
            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-black mb-8">
              <video
                src={post.mediaUrl}
                poster={post.thumbnailUrl ?? undefined}
                controls
                playsInline
                preload="metadata"
                className="w-full max-h-[70vh]"
              />
            </div>
          ) : post.mediaUrl ? (
            <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-muted mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.mediaUrl}
                alt={post.title}
                className="w-full object-contain max-h-[75vh] mx-auto"
              />
            </div>
          ) : null}

          {/* Full text */}
          <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6 md:p-8 mb-10">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-4">
              Post content
            </div>
            <p className="font-sans text-base md:text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
              {post.text}{" "}
              <a
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 hover:text-blue-700 hover:underline underline-offset-4 whitespace-nowrap"
              >
                View more
              </a>
            </p>
          </div>

          {/* Prev / Next */}
          <div className="grid sm:grid-cols-2 gap-4 mb-16">
            <Link
              href={`/work/${prev.slug}`}
              className="group rounded-2xl border border-foreground/10 p-5 hover:border-blue-600/30 hover:bg-blue-600/[0.03] transition-all"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-2 flex items-center gap-2">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous
              </div>
              <div className="font-syne text-sm md:text-base font-bold text-foreground line-clamp-2 group-hover:text-blue-700">
                {prev.title}
              </div>
            </Link>
            <Link
              href={`/work/${next.slug}`}
              className="group rounded-2xl border border-foreground/10 p-5 text-right hover:border-blue-600/30 hover:bg-blue-600/[0.03] transition-all"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/40 mb-2 flex items-center justify-end gap-2">
                Next <ArrowRight className="h-3.5 w-3.5" />
              </div>
              <div className="font-syne text-sm md:text-base font-bold text-foreground line-clamp-2 group-hover:text-blue-700">
                {next.title}
              </div>
            </Link>
          </div>
        </div>

        {/* Related */}
        <div className="max-w-7xl mx-auto">
          <h2 className="font-syne text-2xl md:text-3xl font-bold text-foreground mb-6">
            More work
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <WorkCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
