"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  CompassIcon,
  HeartIcon,
  HomeIcon,
  MenuIcon,
  MessengerIcon,
  PlusSquareIcon,
  ReelsIcon,
  SearchIcon,
  UserIcon,
} from "./icons"

type NavItem = {
  href: string
  label: string
  icon: typeof HomeIcon
}

const sidebarItems: NavItem[] = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "#search", label: "Search", icon: SearchIcon },
  { href: "/news", label: "Explore", icon: CompassIcon },
  { href: "#reels", label: "Reels", icon: ReelsIcon },
  { href: "#messages", label: "Messages", icon: MessengerIcon },
  { href: "#notifications", label: "Notifications", icon: HeartIcon },
  { href: "#create", label: "Create", icon: PlusSquareIcon },
  { href: "/regions/pupr", label: "Profile", icon: UserIcon },
]

const mobileItems: NavItem[] = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "#search", label: "Search", icon: SearchIcon },
  { href: "/news", label: "Explore", icon: CompassIcon },
  { href: "#reels", label: "Reels", icon: ReelsIcon },
  { href: "/regions/pupr", label: "Profile", icon: UserIcon },
]

export function Navigation() {
  const pathname = usePathname() ?? "/"

  return (
    <>
      {/* Mobile bottom tab bar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-30 flex h-[3rem] items-center justify-around border-t border-[var(--line)] bg-[var(--surface)] lg:hidden"
        aria-label="Primary navigation"
      >
        {mobileItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.label}
              href={item.href}
              className={[
                "grid h-12 w-12 place-items-center",
                isActive ? "text-[var(--ink-strong)]" : "text-[var(--ink-soft)]",
              ].join(" ")}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 1.75} />
            </Link>
          )
        })}
      </nav>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 z-20 hidden h-screen flex-col border-r border-[var(--line)] bg-[var(--surface)] pt-8 pb-6 lg:flex lg:w-[4.5rem] xl:w-[15.5rem]">
        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center gap-3 px-4 xl:px-6">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7 text-[var(--ink-strong)]"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="18" cy="6" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <span className="hidden font-[var(--font-display)] text-xl font-extrabold tracking-tight text-[var(--ink-strong)] xl:block">
            SocialGov
          </span>
        </Link>

        {/* Nav items */}
        <nav className="flex flex-1 flex-col gap-1 px-3" aria-label="Desktop navigation">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-[var(--surface-elevated)]",
                  isActive ? "font-bold text-[var(--ink-strong)]" : "text-[var(--ink-strong)]",
                ].join(" ")}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 1.75} />
                <span className="hidden text-[1rem] xl:block">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* More menu */}
        <div className="px-3">
          <button
            type="button"
            className="flex w-full items-center gap-4 rounded-lg px-3 py-3 text-[var(--ink-strong)] transition-colors hover:bg-[var(--surface-elevated)]"
          >
            <MenuIcon size={24} strokeWidth={1.75} />
            <span className="hidden text-[1rem] xl:block">More</span>
          </button>
        </div>
      </aside>
    </>
  )
}
