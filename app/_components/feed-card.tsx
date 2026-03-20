import { Bookmark, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react"
import Image from "next/image"
import type { Post } from "@/app/lib/mock-data"
import { VerifiedBadge } from "./verified-badge"

export function FeedCard({ post }: { post: Post }) {
  return (
    <article className="overflow-hidden border-b border-[var(--line)] bg-[var(--surface)]">
      {/* Header */}
      <header className="flex h-14 items-center justify-between px-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--surface-elevated)] text-[0.6rem] font-bold text-[var(--muted)]">
            <Image
              src={post.user.avatarUrl}
              alt={post.user.displayName}
              width={32}
              height={32}
              unoptimized
              className="h-8 w-8 rounded-full object-cover"
            />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[0.82rem] font-bold text-[var(--ink-strong)]">
              {post.user.username}
            </span>
            {post.user.verified && <VerifiedBadge size={12} />}
            <span className="text-[0.82rem] text-[var(--muted)]">• {post.time}</span>
          </div>
        </div>
        <button
          type="button"
          className="text-[var(--ink-strong)] hover:opacity-70"
          aria-label="More options"
        >
          <MoreHorizontal size={18} strokeWidth={2.5} />
        </button>
      </header>

      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-[var(--surface-elevated)]">
        <Image
          src={post.imageUrl}
          alt={post.caption}
          fill
          sizes="(max-width: 768px) 100vw, 470px"
          className="object-cover"
        />
        {post.budgetTag && (
          <div className="absolute bottom-3 left-3 z-10 rounded-md bg-black/60 px-2.5 py-1 text-[0.7rem] font-bold text-white backdrop-blur-sm">
            {post.budgetTag}
          </div>
        )}
      </div>

      {/* Actions */}
      <section className="px-3 pt-3">
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-4">
            <button type="button" className="hover:opacity-60" aria-label="Like">
              <Heart size={24} strokeWidth={1.75} />
            </button>
            <button type="button" className="hover:opacity-60" aria-label="Comment">
              <MessageCircle size={24} strokeWidth={1.75} />
            </button>
            <button type="button" className="hover:opacity-60" aria-label="Share">
              <Send size={22} strokeWidth={1.75} />
            </button>
          </div>
          <button type="button" className="hover:opacity-60" aria-label="Save">
            <Bookmark size={24} strokeWidth={1.75} />
          </button>
        </div>

        {/* Likes */}
        <p className="mb-1.5 text-[0.82rem] font-bold text-[var(--ink-strong)]">
          {post.likes.toLocaleString("id-ID")} likes
        </p>

        {/* Caption */}
        <div className="mb-1 text-[0.82rem] leading-[1.35] text-[var(--ink-strong)]">
          <span className="mr-1.5 font-bold">{post.user.username}</span>
          {post.caption}
        </div>

        {/* Comments */}
        {post.totalComments > 0 && (
          <button
            type="button"
            className="mb-1 block text-[0.82rem] text-[var(--muted)] hover:opacity-80"
          >
            View all {post.totalComments} comments
          </button>
        )}

        {post.comments.slice(0, 2).map((comment) => (
          <div
            key={comment.username}
            className="text-[0.82rem] leading-[1.35] text-[var(--ink-strong)]"
          >
            <span className="mr-1.5 font-bold">{comment.username}</span>
            {comment.text}
          </div>
        ))}

        {/* Timestamp */}
        <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-tight text-[var(--muted)]">
          {post.time} lalu
        </p>
      </section>
    </article>
  )
}
