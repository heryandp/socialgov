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

export function SearchIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
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

export function MoreHorizontalIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="6" cy="12" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.25" fill="currentColor" stroke="none" />
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

export function HomeIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 10.5 12 4l8 6.5" />
      <path d="M6.5 9.5v9h11v-9" />
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

export function NewspaperIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M6 5.5h10.5a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H8a2.5 2.5 0 0 1-2.5-2.5V7.5A2 2 0 0 1 7.5 5.5Z" />
      <path d="M8.5 9h7" />
      <path d="M8.5 12h7" />
      <path d="M8.5 15h4.5" />
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
