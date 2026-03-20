type VerifiedBadgeProps = {
  size?: number
}

export function VerifiedBadge({ size = 12 }: VerifiedBadgeProps) {
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
