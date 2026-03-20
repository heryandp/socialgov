import Image from "next/image"
import Link from "next/link"
import { VerifiedBadge } from "../_components/verified-badge"
import { institutions } from "../lib/mock-data"

export default function RegionsPage() {
  return (
    <div className="mx-auto w-full max-w-[82rem] px-4 py-6 md:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[58rem]">
        <h1 className="mb-6 text-xl font-bold text-[var(--ink-strong)]">Accounts</h1>

        <div className="grid gap-3">
          {institutions.map((inst) => (
            <Link
              key={inst.slug}
              href={`/regions/${inst.slug}`}
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 transition-colors hover:bg-[var(--surface-elevated)]"
            >
              <Image
                src={inst.user.avatarUrl}
                alt={inst.user.displayName}
                width={56}
                height={56}
                unoptimized
                className="h-14 w-14 shrink-0 rounded-full object-cover"
              />
              <div className="flex flex-1 flex-col">
                <span className="flex items-center gap-1.5 text-sm font-bold text-[var(--ink-strong)]">
                  {inst.user.username}
                  {inst.user.verified && <VerifiedBadge size={12} />}
                </span>
                <span className="text-sm text-[var(--muted)]">{inst.user.displayName}</span>
                <span className="text-[0.75rem] text-[var(--ink-soft)]">
                  {inst.stats[1].value} followers
                </span>
              </div>
              <span className="rounded-lg bg-[var(--accent)] px-5 py-1.5 text-sm font-bold text-white">
                Follow
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
