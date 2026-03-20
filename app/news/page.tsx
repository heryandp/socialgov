import Image from "next/image"
import { SearchIcon } from "../_components/icons"
import { exploreGrid } from "../lib/mock-data"

export default function ExplorePage() {
  return (
    <div className="mx-auto w-full max-w-[82rem] px-4 py-6 md:px-6 lg:px-8 lg:py-8">
      {/* Search bar (mobile-visible, desktop hidden since nav has search) */}
      <div className="flex items-center gap-3 px-4 py-3 lg:hidden">
        <div className="flex h-9 flex-1 items-center gap-2 rounded-lg bg-[var(--surface-elevated)] px-3">
          <SearchIcon size={16} className="text-[var(--muted)]" strokeWidth={2} />
          <span className="text-sm text-[var(--muted)]">Search</span>
        </div>
      </div>

      {/* Explore Grid */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {exploreGrid.map((item) => {
          const isLarge = item.size === "large"
          return (
            <article
              key={item.id}
              className={[
                "group relative overflow-hidden rounded-[1.1rem] bg-[var(--surface-elevated)]",
                isLarge ? "col-span-1 row-span-2 aspect-auto min-h-[280px]" : "aspect-square",
              ].join(" ")}
            >
              <Image
                src={item.imageUrl}
                alt={item.label}
                fill
                sizes={
                  isLarge ? "(max-width: 1024px) 33vw, 360px" : "(max-width: 1024px) 33vw, 240px"
                }
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 z-10 flex items-end bg-gradient-to-t from-black/40 to-transparent p-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-[0.75rem] font-bold text-white">{item.label}</span>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
