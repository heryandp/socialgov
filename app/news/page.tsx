import { featuredEditorialQuote, newsroom } from "../lib/mock-data"

export default function NewsPage() {
  const [hero, leftStory, rightStory] = newsroom

  return (
    <section className="grid">
      <div className="grid min-h-[calc(100vh-4.5rem)] border-x border-[var(--line)] lg:grid-cols-[15rem_minmax(0,37.5rem)] lg:justify-center xl:grid-cols-[15rem_minmax(0,37.5rem)_20rem]">
        <aside className="hidden border-r border-[var(--line)] bg-[var(--surface)] px-4 py-8 lg:grid lg:content-start">
          <div className="mb-8 grid text-[1.8rem] font-extrabold uppercase leading-[0.92] tracking-[-0.06em]">
            <strong className="text-[var(--ink-strong)]">Jaga</strong>
            <strong className="text-[var(--accent)]">Anggaran</strong>
          </div>
          <nav className="grid gap-1">
            <a className="rounded-xl px-4 py-3 font-bold text-[var(--ink-soft)]" href="/">
              Home Feed
            </a>
            <a
              className="rounded-xl border-l-4 border-[var(--accent)] bg-[var(--surface-elevated)] px-4 py-3 font-bold text-[var(--ink-strong)]"
              href="/news"
            >
              Berita / Opini
            </a>
            <a className="rounded-xl px-4 py-3 font-bold text-[var(--ink-soft)]" href="/regions">
              Eksplorasi
            </a>
            <a
              className="rounded-xl px-4 py-3 font-bold text-[var(--ink-soft)]"
              href="/regions/pupr"
            >
              Profil Anda
            </a>
          </nav>
          <button
            className="mt-auto min-h-12 rounded-md bg-[var(--accent)] text-[0.78rem] font-extrabold uppercase text-white"
            type="button"
          >
            Lapor Anggaran
          </button>
        </aside>

        <main className="grid content-start border-r border-[var(--line)] bg-[var(--surface)]">
          <header className="border-b border-[var(--line)] px-6 py-6">
            <h1 className="font-[var(--font-display)] text-[clamp(2rem,5vw,3rem)] font-extrabold uppercase leading-[0.96] text-[var(--ink-strong)]">
              Editorial & Opini
            </h1>
            <p className="mt-2 text-[var(--ink-soft)]">
              Analisis mendalam, investigasi, dan konteks di balik angka-angka anggaran.
            </p>
          </header>

          <article className="border-b border-[var(--line)] p-6">
            <div className="relative mb-4 h-72 rounded-md border border-[var(--line)] bg-[linear-gradient(135deg,#cfd3dc,#b6becb)]">
              <span className="absolute left-4 top-4 bg-[var(--accent)] px-2 py-1 text-[0.66rem] font-extrabold uppercase text-white">
                {hero.heat}
              </span>
            </div>
            <p className="text-[0.78rem] font-bold uppercase text-[var(--ink-soft)]">
              {hero.time} • {hero.source}
            </p>
            <h2 className="my-3 text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold leading-[1.04] text-[var(--ink-strong)]">
              {hero.title}
            </h2>
            <p className="leading-7 text-[var(--ink-soft)]">{hero.summary}</p>
          </article>

          <blockquote className="border-b border-[var(--line)] border-l-4 border-l-[var(--accent)] p-6 font-[var(--font-display)] text-[clamp(1.3rem,3vw,1.75rem)] italic leading-[1.45] text-[var(--ink-strong)]">
            {featuredEditorialQuote}
          </blockquote>

          <section className="grid bg-[var(--line)] md:grid-cols-2 md:gap-px">
            {[leftStory, rightStory].map((item) => (
              <article key={item.id} className="grid gap-3 bg-[var(--surface)] p-5">
                <span className="text-[0.7rem] font-extrabold uppercase text-[var(--accent)]">
                  {item.heat}
                </span>
                <h3 className="text-xl font-bold leading-[1.18] text-[var(--ink-strong)]">
                  {item.title}
                </h3>
                <p className="leading-7 text-[var(--ink-soft)]">{item.summary}</p>
                <strong className="text-[0.74rem] uppercase text-[var(--muted)]">
                  {item.time}
                </strong>
              </article>
            ))}
          </section>
        </main>

        <aside className="hidden bg-[var(--surface)] p-6 xl:block">
          <h3 className="mb-4 text-[0.7rem] font-extrabold uppercase text-[var(--accent)]">
            Topik Hangat
          </h3>
          <div className="flex items-start gap-3">
            <span className="font-extrabold text-[var(--accent)]">01</span>
            <div>
              <strong className="block text-[var(--ink-strong)]">
                Pengadaan Laptop Kemendikbud
              </strong>
              <p className="text-[var(--ink-soft)]">2.4k diskusi aktif</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
