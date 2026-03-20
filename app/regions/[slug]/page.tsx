import Image from "next/image"
import { notFound } from "next/navigation"
import { GridIcon, HeartIcon, MessageCircleIcon, ReelsIcon, TagIcon } from "@/app/_components/icons"
import { VerifiedBadge } from "@/app/_components/verified-badge"
import { institutions } from "@/app/lib/mock-data"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return institutions.map((inst) => ({ slug: inst.slug }))
}

export default async function ProfilePage({ params }: Props) {
  const { slug } = await params
  const institution = institutions.find((item) => item.slug === slug)

  if (!institution) {
    notFound()
  }

  const { user } = institution

  return (
    <div className="mx-auto w-full max-w-[82rem] px-4 py-6 md:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[58rem]">
        {/* Profile Header */}
        <section className="flex flex-col items-center gap-6 px-4 py-6 sm:flex-row sm:items-start sm:gap-16 sm:px-0 lg:py-8">
          {/* Avatar */}
          <div className="shrink-0">
            <div
              className="flex h-[150px] w-[150px] items-center justify-center rounded-full p-[4px]"
              style={{ background: "var(--story-gradient)" }}
            >
              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full border-4 border-[var(--surface)] bg-[var(--surface-elevated)]">
                <Image
                  src={user.avatarUrl}
                  alt={user.displayName}
                  width={142}
                  height={142}
                  unoptimized
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col items-center gap-5 sm:items-start">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="flex items-center gap-2 text-xl text-[var(--ink-strong)]">
                {user.username}
                {user.verified && <VerifiedBadge size={18} />}
              </h1>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-lg bg-[var(--surface-elevated)] px-5 py-1.5 text-sm font-bold text-[var(--ink-strong)] transition-colors hover:bg-[var(--line)]"
                >
                  Following
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-[var(--surface-elevated)] px-5 py-1.5 text-sm font-bold text-[var(--ink-strong)] transition-colors hover:bg-[var(--line)]"
                >
                  Message
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="hidden items-center gap-10 sm:flex">
              {institution.stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-1.5">
                  <span className="font-bold text-[var(--ink-strong)]">{stat.value}</span>
                  <span className="text-[var(--ink-soft)]">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-0.5 text-sm">
              <p className="font-bold text-[var(--ink-strong)]">{user.displayName}</p>
              <p className="whitespace-pre-line text-[var(--ink-strong)]">
                {institution.description}
              </p>
              <a
                href={`https://${institution.website}`}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[var(--accent-deep)] hover:underline"
              >
                {institution.website}
              </a>
            </div>
          </div>
        </section>

        {/* Mobile stats */}
        <section className="flex border-y border-[var(--line)] py-3 sm:hidden">
          {institution.stats.map((stat) => (
            <div key={stat.label} className="flex flex-1 flex-col items-center gap-0.5">
              <span className="font-bold text-[var(--ink-strong)]">{stat.value}</span>
              <span className="text-[0.75rem] text-[var(--muted)]">{stat.label}</span>
            </div>
          ))}
        </section>

        {/* Tabs */}
        <div className="flex justify-center border-t border-[var(--line)]">
          <div className="flex gap-16">
            <button
              type="button"
              className="flex items-center gap-1.5 border-t border-[var(--ink-strong)] py-4 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--ink-strong)]"
            >
              <GridIcon size={12} strokeWidth={2} />
              Posts
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 border-t border-transparent py-4 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)]"
            >
              <ReelsIcon size={12} strokeWidth={2} />
              Reels
            </button>
            <button
              type="button"
              className="flex items-center gap-1.5 border-t border-transparent py-4 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--muted)]"
            >
              <TagIcon size={12} strokeWidth={2} />
              Tagged
            </button>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {institution.gallery.map((item) => (
            <article
              key={item.id}
              className="group relative aspect-square w-full overflow-hidden bg-[var(--surface-elevated)]"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 33vw, 320px"
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 flex items-center justify-center gap-6 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex items-center gap-1.5 text-white">
                  <HeartIcon size={20} strokeWidth={2.5} fill="white" />
                  <span className="text-sm font-bold">{item.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1.5 text-white">
                  <MessageCircleIcon size={20} strokeWidth={2.5} fill="white" />
                  <span className="text-sm font-bold">{item.comments.toLocaleString()}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
