import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

function BaseIcon({ children, size = 24, strokeWidth = 1.75, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function HomeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5v10h14v-10" />
    </BaseIcon>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </BaseIcon>
  )
}

export function CompassIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-2.3 5.6-3-3 5.3-2.6Z" />
    </BaseIcon>
  )
}

export function ReelsIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="m10 9 5 3-5 3V9Z" />
    </BaseIcon>
  )
}

export function MessengerIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3a9 9 0 0 0-9 9 8.9 8.9 0 0 0 3.1 6.8L5 21l2.3-1.1A8.9 8.9 0 0 0 12 21a9 9 0 0 0 0-18Z" />
      <path d="m8 13 3-3 2 2 3-3" />
    </BaseIcon>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 20.5c-4.7-3.1-7.5-5.8-7.5-9.4A4.6 4.6 0 0 1 9.1 6.5c1.3 0 2.5.6 3.3 1.6.8-1 2-1.6 3.3-1.6a4.6 4.6 0 0 1 4.6 4.6c0 3.6-2.8 6.3-7.5 9.4Z" />
    </BaseIcon>
  )
}

export function PlusSquareIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </BaseIcon>
  )
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 18.5 3.5 20l1.2-3.7a7.5 7.5 0 1 1 2.3 2.2Z" />
    </BaseIcon>
  )
}

export function SendIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M20 4 9 15" />
      <path d="m20 4-7 16-2.5-6.5L4 11 20 4Z" />
    </BaseIcon>
  )
}

export function BookmarkIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M7 4.5h10a1 1 0 0 1 1 1v14l-6-3.8-6 3.8v-14a1 1 0 0 1 1-1Z" />
    </BaseIcon>
  )
}

export function MoreHorizontalIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="6" cy="12" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.25" fill="currentColor" stroke="none" />
    </BaseIcon>
  )
}

export function GridIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </BaseIcon>
  )
}

export function TagIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l5.58-5.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </BaseIcon>
  )
}

export function UserIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="12" cy="8.5" r="3.25" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" />
    </BaseIcon>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </BaseIcon>
  )
}

export function VerifiedBadge({ size = 12 }: { size?: number }) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none" aria-label="Verified">
      <circle cx="20" cy="20" r="20" fill="#0095f6" />
      <path
        d="M12 20.5l5.5 5L28 15"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
