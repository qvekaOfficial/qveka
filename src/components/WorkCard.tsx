"use client";

import Link from "next/link";
import { Heart, Repeat2, MessageCircle, ArrowUpRight, Play } from "lucide-react";
import { WorkPost, formatCount } from "@/data/work";

export default function WorkCard({ post }: { post: WorkPost }) {
  return (
    <Link
      href={`/work/${post.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-white hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
    >
      {/* Media */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {post.thumbnailUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.thumbnailUrl}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600/10 to-red-500/10">
            <span className="font-syne text-4xl font-bold text-foreground/10">
              {post.brand.charAt(0)}
            </span>
          </div>
        )}
        {post.mediaType === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/60 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play className="h-5 w-5 fill-white text-white ml-0.5" />
            </div>
          </div>
        )}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-sm">
            {post.platform === "x" ? "X Post" : post.platform}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground backdrop-blur-sm">
            {post.brand}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-3 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.avatar}
            alt={post.author}
            loading="lazy"
            className="h-9 w-9 rounded-full object-cover border border-foreground/10"
          />
          <div className="min-w-0">
            <div className="truncate font-syne text-sm font-bold text-foreground">
              {post.author}
            </div>
            <div className="truncate font-mono text-xs text-foreground/50">
              @{post.handle} · {post.postedAt}
            </div>
          </div>
          <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-foreground/30 transition-all duration-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <h3 className="font-syne text-base md:text-lg font-bold leading-snug text-foreground line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors">
          {post.title}
        </h3>
        <p className="font-sans text-sm text-foreground/60 leading-relaxed line-clamp-3 mb-4">
          {post.text.split("\n")[0]}
        </p>

        {/* Stats */}
        <div className="mt-auto flex items-center gap-5 border-t border-foreground/5 pt-4 font-mono text-xs text-foreground/50">
          <span className="inline-flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5" />
            {formatCount(post.likes)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Repeat2 className="h-4 w-4" />
            {formatCount(post.reposts)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="h-3.5 w-3.5" />
            {formatCount(post.replies)}
          </span>
        </div>
      </div>
    </Link>
  );
}
