import Image from "next/image"
import type { Story } from "@/app/lib/mock-data"

function StoryAvatar({ story }: { story: Story }) {
  return (
    <button type="button" className="flex shrink-0 flex-col items-center gap-1.5 px-1">
      <div
        className="flex aspect-square h-[66px] w-[66px] items-center justify-center rounded-full p-[3px]"
        style={{
          background: story.seen ? "var(--line)" : "var(--story-gradient)",
        }}
      >
        <div className="flex aspect-square h-full w-full items-center justify-center overflow-hidden rounded-full border-[3px] border-[var(--surface)] bg-[var(--surface-elevated)] text-[0.65rem] font-bold text-[var(--muted)]">
          <Image
            src={story.user.avatarUrl}
            alt={story.user.displayName}
            width={60}
            height={60}
            unoptimized
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
      <span className="max-w-[66px] truncate text-[0.7rem] text-[var(--ink-strong)]">
        {story.user.username.replace(/_/g, "")}
      </span>
    </button>
  )
}

export function StoriesBar({ stories }: { stories: Story[] }) {
  return (
    <div className="mb-4 flex gap-2 overflow-x-auto bg-[var(--surface)] px-3 py-3 scrollbar-none">
      {stories.map((story) => (
        <StoryAvatar key={story.id} story={story} />
      ))}
    </div>
  )
}
