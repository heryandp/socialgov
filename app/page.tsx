import { FeedCard } from "./_components/feed-card"
import { budgetPosts } from "./lib/mock-data"

const stories = [
  { id: "pupr", name: "PUPR", avatar: "PU", hasLive: false },
  { id: "kemenkes", name: "Kemenkes", avatar: "KS", hasLive: false },
  { id: "kemendikbud", name: "Kemendik..", avatar: "KB", hasLive: false },
  { id: "kemenhub", name: "Kemenhub", avatar: "KH", hasLive: true },
  { id: "dpr", name: "DPR RI", avatar: "DR", hasLive: false },
  { id: "bappenas", name: "Bappenas", avatar: "BP", hasLive: false },
  { id: "dki", name: "Pemprov DKI", avatar: "DK", hasLive: false },
] as const

export default function Home() {
  return (
    <main className="mx-auto max-w-[47rem] lg:max-w-none">
      <section className="overflow-x-auto border-b border-[var(--line)] bg-[var(--surface)] py-3">
        <div className="flex gap-4 px-4">
          {stories.map((story) => (
            <article key={story.id} className="flex flex-col items-center gap-1.5">
              <div
                className={`relative grid h-16 w-16 place-items-center rounded-full ${
                  story.hasLive
                    ? "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px]"
                    : "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-[2px]"
                }`}
              >
                <div className="grid h-full w-full place-items-center rounded-full border-2 border-[var(--surface)] bg-[var(--bg)]">
                  <span className="text-[0.7rem] font-extrabold text-[var(--muted)]">
                    {story.avatar}
                  </span>
                </div>
                {story.hasLive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 rounded-sm bg-[var(--accent)] px-1 py-0.5 text-[0.5rem] font-bold uppercase text-white">
                    Live
                  </span>
                )}
              </div>
              <span className="max-w-[4rem] truncate text-[0.7rem] text-[var(--ink-soft)]">
                {story.name}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="divide-y divide-[var(--line)] bg-[var(--surface)]">
        {budgetPosts.map((post) => (
          <FeedCard key={post.id} post={post} />
        ))}
      </section>
    </main>
  )
}
