"use client"

import type { BudgetPost } from "@/app/lib/mock-data"
import { BookmarkIcon, HeartIcon, MessageCircleIcon, MoreHorizontalIcon, SendIcon } from "./icons"

const statusConfig = {
  "High Risk": {
    bg: "bg-[var(--danger)]",
    label: "High Risk",
  },
  Verified: {
    bg: "bg-[var(--success)]",
    label: "Terverifikasi",
  },
  "Under Review": {
    bg: "bg-[var(--warning)]",
    label: "Ditinjau",
  },
} as const

export function FeedCard({ post }: { post: BudgetPost }) {
  const config = statusConfig[post.status]

  return (
    <article className="bg-[var(--surface)]">
      <header className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[var(--bg)]">
                <span className="text-[0.65rem] font-extrabold text-[var(--muted)]">
                  {post.avatar}
                </span>
              </div>
            </div>
          </div>
          <div className="grid">
            <span className="text-[0.875rem] font-semibold text-[var(--ink-strong)]">
              {post.author}
            </span>
            <span className="text-[0.7rem] text-[var(--ink-soft)]">{post.region}</span>
          </div>
        </div>
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-full text-[var(--ink-strong)] hover:bg-[var(--surface-elevated)]"
          aria-label="More options"
        >
          <MoreHorizontalIcon size={20} strokeWidth={2} />
        </button>
      </header>

      <div className="relative bg-[linear-gradient(135deg,#c4d8e9,#86b6de_48%,#ead9b7)]">
        <div className="aspect-square w-full" />
        <div
          className={`absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase text-white ${config.bg}`}
        >
          {config.label}
        </div>
        <div className="absolute bottom-3 left-3 rounded-lg border border-white/30 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[0.75rem] font-bold text-white">{post.budget}</span>
        </div>
      </div>

      <section className="px-4 py-3">
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--surface-elevated)] hover:text-[var(--accent)]"
              aria-label="Like"
            >
              <HeartIcon size={24} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--surface-elevated)]"
              aria-label="Comment"
            >
              <MessageCircleIcon size={23} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--surface-elevated)]"
              aria-label="Share"
            >
              <SendIcon size={20} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="ml-auto grid h-9 w-9 place-items-center rounded-full hover:bg-[var(--surface-elevated)]"
              aria-label="Save"
            >
              <BookmarkIcon size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[0.875rem] font-semibold text-[var(--ink-strong)]">
            {post.saves.toLocaleString("id-ID")} saves
          </p>

          <div className="flex gap-2">
            <span className="text-[0.875rem] font-semibold text-[var(--ink-strong)]">
              {post.author}
            </span>
            <p className="text-[0.875rem] leading-snug text-[var(--ink-strong)]">{post.summary}</p>
          </div>

          {post.comments > 0 && (
            <button type="button" className="text-[0.875rem] text-[var(--muted)]">
              View all {post.comments} comments
            </button>
          )}

          <div className="flex items-center gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--surface-elevated)] px-2 py-0.5 text-[0.7rem] font-medium text-[var(--ink-soft)]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <p className="text-[0.7rem] uppercase text-[var(--muted)]">{post.time}</p>
        </div>
      </section>
    </article>
  )
}
