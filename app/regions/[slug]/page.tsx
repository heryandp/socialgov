import { notFound } from "next/navigation"
import { institutions } from "@/app/lib/mock-data"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return institutions.map((institution) => ({ slug: institution.slug }))
}

export default async function RegionProfilePage({ params }: Props) {
  const { slug } = await params
  const institution = institutions.find((item) => item.slug === slug)

  if (!institution) {
    notFound()
  }

  return (
    <section className="grid">
      <div className="grid gap-6 xl:grid-cols-[39rem_18rem] xl:justify-center">
        <main className="grid content-start gap-4">
          <section className="grid justify-items-center gap-3 border border-[var(--line)] bg-[var(--surface)] px-5 py-8 text-center">
            <div className="grid h-36 w-36 place-items-center rounded-full border border-[var(--line)]">
              <div className="grid h-32 w-32 place-items-center rounded-full bg-[linear-gradient(135deg,#f6d8df,#fdf4e6_55%,#edf0ff)] font-[var(--font-display)] text-[2rem] font-extrabold text-[var(--accent-deep)]">
                {institution.shortName}
              </div>
            </div>
            <h1 className="font-[var(--font-display)] text-[clamp(2rem,5vw,3rem)] font-extrabold leading-[0.98] text-[var(--ink-strong)]">
              {institution.name}
            </h1>
            <p className="max-w-2xl text-[var(--ink-soft)]">{institution.description}</p>
            <a
              href={`https://${institution.website}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[var(--accent)]"
            >
              {institution.website}
            </a>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="min-h-11 border border-[var(--line)] px-4 font-bold text-[var(--ink-strong)]"
              >
                Track Updates
              </button>
              <button
                type="button"
                className="min-h-11 border border-[var(--line)] px-4 font-bold text-[var(--ink-strong)]"
              >
                Submit Query
              </button>
            </div>
          </section>

          <section className="grid grid-cols-1 border border-[var(--line)] bg-[var(--surface)] p-4 sm:grid-cols-3">
            <div className="grid gap-1 text-center">
              <strong className="text-[var(--ink-strong)]">{institution.budgetTracked}</strong>
              <span className="text-[var(--ink-soft)]">Budget Tracked</span>
            </div>
            <div className="grid gap-1 text-center">
              <strong className="text-[var(--ink-strong)]">{institution.verifiedPosts}</strong>
              <span className="text-[var(--ink-soft)]">Verified Posts</span>
            </div>
            <div className="grid gap-1 text-center">
              <strong className="text-[var(--ink-strong)]">{institution.activeDisputes}</strong>
              <span className="text-[var(--ink-soft)]">Active Disputes</span>
            </div>
          </section>

          <section className="grid grid-cols-3 border border-[var(--line)] bg-[var(--surface)]">
            <button
              type="button"
              className="border-b-2 border-[var(--ink-strong)] px-4 py-4 font-bold"
            >
              Posts
            </button>
            <button type="button" className="px-4 py-4 font-bold text-[var(--ink-soft)]">
              Tagged
            </button>
            <button type="button" className="px-4 py-4 font-bold text-[var(--ink-soft)]">
              Reports
            </button>
          </section>

          <section className="grid grid-cols-1 gap-1 sm:grid-cols-3">
            {institution.gallery.map((item) => (
              <article
                key={item.id}
                className="relative min-h-44 overflow-hidden bg-[var(--surface)]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,#b7d5ea,#80b8e7_48%,#eed9b8)]" />
                <p className="absolute left-3 top-3 z-10 text-[0.82rem] font-bold text-white">
                  {item.title}
                </p>
                <div className="absolute inset-x-0 bottom-0 z-10 grid gap-1 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55))] p-3">
                  <strong className="text-white">{item.value}</strong>
                  <span className="text-white">{item.status}</span>
                </div>
              </article>
            ))}
          </section>
        </main>

        <aside className="grid content-start gap-4">
          <section className="grid gap-4 border border-[var(--line)] bg-[var(--surface)] p-4">
            <h2 className="font-bold text-[var(--ink-strong)]">Related Institutions</h2>
            <div className="grid gap-4">
              {institution.related.map((item) => (
                <article key={item.name} className="flex justify-between gap-4">
                  <div>
                    <strong className="block text-[var(--ink-strong)]">{item.name}</strong>
                    <p className="text-[var(--ink-soft)]">{item.subtitle}</p>
                  </div>
                  <span className="text-[0.82rem] font-extrabold text-[var(--accent)]">Track</span>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 border border-[var(--line)] bg-[var(--surface)] p-4">
            <h2 className="font-bold text-[var(--ink-strong)]">Transparency Score</h2>
            <div className="flex items-center gap-3 border border-[var(--line)] p-4">
              <strong className="text-[2rem] font-extrabold text-[var(--success)]">
                {institution.trustScore}
              </strong>
              <span className="text-[var(--ink-soft)]">{institution.trustLabel}</span>
            </div>
          </section>
        </aside>
      </div>
    </section>
  )
}
