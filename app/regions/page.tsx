import Link from "next/link"
import { institutions } from "../lib/mock-data"

export default function RegionsPage() {
  return (
    <section className="grid gap-5">
      <header>
        <h1 className="font-[var(--font-display)] text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[0.95] text-[var(--ink-strong)]">
          Institusi
        </h1>
        <p className="mt-2 text-[var(--ink-soft)]">
          Profil lembaga yang dipantau, lengkap dengan trust score dan kumpulan posting anggaran.
        </p>
      </header>

      <div className="grid gap-4">
        {institutions.map((institution) => (
          <Link
            key={institution.slug}
            href={`/regions/${institution.slug}`}
            className="grid gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#f6d8df,#fdf4e6_55%,#edf0ff)] font-extrabold text-[var(--accent-deep)]">
              {institution.shortName.slice(0, 2)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[var(--ink-strong)]">{institution.name}</h2>
              <p className="mt-1 text-[var(--ink-soft)]">{institution.description}</p>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[var(--ink-soft)]">{institution.budgetTracked}</span>
              <strong className="text-[var(--ink-strong)]">{institution.trustScore}</strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
