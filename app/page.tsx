import Image from "next/image"
import Link from "next/link"
import { FeedCard } from "./_components/feed-card"
import { StoriesBar } from "./_components/stories-bar"
import { VerifiedBadge } from "./_components/verified-badge"
import { currentUser, feedPosts, stories, suggestedUsers } from "./lib/mock-data"

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[82rem] px-4 py-6 md:px-6 lg:px-8 lg:py-8">
      <div className="xl:grid xl:grid-cols-[30%_minmax(0,40%)_30%] xl:gap-10">
        <div className="hidden xl:block" aria-hidden="true" />

        {/* Main Feed */}
        <main className="mx-auto w-full max-w-[29.375rem] xl:max-w-none">
          <StoriesBar stories={stories} />
          {feedPosts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </main>

        {/* Right Sidebar */}
        <aside className="sticky top-8 hidden h-fit w-full max-w-[20rem] justify-self-end self-start pt-4 xl:block">
          {/* Current user */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={currentUser.avatarUrl}
                alt={currentUser.displayName}
                width={44}
                height={44}
                unoptimized
                className="h-11 w-11 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[var(--ink-strong)]">
                  {currentUser.username}
                </span>
                <span className="text-sm text-[var(--muted)]">{currentUser.displayName}</span>
              </div>
            </div>
            <button
              type="button"
              className="text-[0.75rem] font-bold text-[var(--accent)] hover:text-[var(--accent-deep)]"
            >
              Switch
            </button>
          </div>

          {/* Suggested */}
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-bold text-[var(--muted)]">Suggested for you</span>
            <button
              type="button"
              className="text-[0.75rem] font-bold text-[var(--ink-strong)] hover:opacity-70"
            >
              See All
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {suggestedUsers.map((user) => (
              <div key={user.username} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={user.avatarUrl}
                    alt={user.displayName}
                    width={32}
                    height={32}
                    unoptimized
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <Link
                      href={`/regions/${user.username}`}
                      className="flex items-center gap-1 text-[0.82rem] font-bold text-[var(--ink-strong)] hover:opacity-70"
                    >
                      {user.username}
                      {user.verified && <VerifiedBadge size={11} />}
                    </Link>
                    <span className="text-[0.7rem] text-[var(--muted)]">{user.reason}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[0.75rem] font-bold text-[var(--accent)] hover:text-[var(--accent-deep)]"
                >
                  Follow
                </button>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-wrap gap-x-1.5 gap-y-1 text-[0.7rem] text-[var(--muted)] opacity-50">
            {[
              "About",
              "Help",
              "Press",
              "API",
              "Jobs",
              "Privacy",
              "Terms",
              "Locations",
              "Language",
              "Meta Verified",
            ].map((link) => (
              <span
                key={link}
                className="cursor-pointer after:content-['·'] after:mx-0.5 last:after:content-none"
              >
                {link}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[0.7rem] font-medium tracking-wider text-[var(--muted)] opacity-40">
            © 2026 SocialGov
          </p>
        </aside>
      </div>
    </div>
  )
}
