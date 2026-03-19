"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BookmarkIcon,
  CompassIcon,
  HeartIcon,
  HomeIcon,
  NewspaperIcon,
  PlusSquareIcon,
  SearchIcon,
  UserIcon,
} from "./icons"

type NavItem = {
  href: string
  label: string
  icon: typeof HomeIcon
  disabled: boolean
}

const items: NavItem[] = [
  { href: "/", label: "Home", icon: HomeIcon, disabled: false },
  { href: "/explore", label: "Explore", icon: CompassIcon, disabled: false },
  { href: "/create", label: "Create", icon: BookmarkIcon, disabled: true },
  { href: "/news", label: "News", icon: NewspaperIcon, disabled: false },
  { href: "/profile", label: "Profile", icon: UserIcon, disabled: false },
]

export function Navigation() {
  const pathname = usePathname() ?? "/"

  return (
    <>
      <nav
        className="fixed inset-x-0 bottom-0 z-30 flex h-[3.35rem] items-center justify-around border-t border-[var(--line)] bg-[var(--surface)] lg:hidden"
        aria-label="Mobile navigation"
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.label}
              href={item.disabled ? pathname : item.href}
              aria-disabled={item.disabled}
              className={[
                "grid h-12 w-12 place-items-center",
                isActive ? "text-[var(--accent)]" : "text-[var(--ink-soft)]",
                item.disabled ? "opacity-50" : "",
              ].join(" ")}
            >
              <Icon size={24} strokeWidth={isActive ? 2.2 : 1.75} />
            </Link>
          )
        })}
      </nav>

      <aside className="sticky top-0 hidden h-screen w-[4.5rem] flex-col border-r border-[var(--line)] bg-[var(--surface)] pt-4 lg:flex xl:w-[15rem]">
        <Link
          href="/"
          className="mb-6 px-4 font-[var(--font-display)] text-[1.6rem] font-extrabold uppercase tracking-[-0.04em]"
        >
          <strong className="text-[var(--ink-strong)]">social</strong>
          <strong className="text-[var(--accent)]">gov</strong>
        </Link>

        <nav className="flex flex-1 flex-col gap-1 px-2" aria-label="Desktop navigation">
          {items.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <Link
                key={item.label}
                href={item.disabled ? pathname : item.href}
                aria-disabled={item.disabled}
                className={[
                  "flex items-center gap-3 rounded-xl px-4 py-3",
                  isActive
                    ? "bg-[var(--surface-elevated)] font-semibold text-[var(--ink-strong)]"
                    : "text-[var(--ink-soft)]",
                  item.disabled ? "opacity-50" : "",
                ].join(" ")}
              >
                <Icon size={22} strokeWidth={isActive ? 2.2 : 1.75} />
                <span className="hidden text-[0.95rem] xl:block">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
