import Link from "next/link"
import type { ReactNode } from "react"
import { HeartIcon, PlusSquareIcon, SearchIcon } from "./icons"
import { Navigation } from "./navigation"

export function AppChrome({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navigation />

      <div className="lg:pl-[4.5rem] xl:pl-[15rem]">
        <TopHeader />
        <div className="pb-24 lg:pb-6">{children}</div>
      </div>
    </div>
  )
}

export function TopHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--surface)]">
      <div className="mx-auto flex h-[3.75rem] max-w-[47rem] items-center justify-between gap-4 px-4 lg:max-w-none lg:px-0 xl:max-w-[47rem]">
        <Link
          href="/"
          className="font-[var(--font-display)] text-[1.55rem] font-extrabold uppercase tracking-[-0.04em] lg:hidden"
        >
          <strong className="text-[var(--ink-strong)]">social</strong>
          <strong className="text-[var(--accent)]">gov</strong>
        </Link>

        <div className="ml-auto flex items-center gap-1 text-[var(--ink-strong)] lg:mr-6">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-[var(--surface-elevated)] lg:hidden"
            aria-label="Search"
          >
            <SearchIcon size={22} strokeWidth={1.75} />
          </button>
          <div className="hidden h-[2.25rem] min-w-[13rem] items-center gap-2 rounded-lg border border-[var(--line)] bg-[var(--bg)] px-4 lg:flex">
            <SearchIcon size={16} className="text-[var(--muted)]" strokeWidth={2} />
            <span className="text-[0.875rem] text-[var(--muted)]">Cari daerah atau isu...</span>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-[var(--surface-elevated)]"
            aria-label="Notifications"
          >
            <HeartIcon size={22} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full hover:bg-[var(--surface-elevated)]"
            aria-label="Create"
          >
            <PlusSquareIcon size={22} strokeWidth={1.75} />
          </button>
        </div>
      </div>
    </header>
  )
}
