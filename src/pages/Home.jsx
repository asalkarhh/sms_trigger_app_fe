import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquareText, ArrowUpRight, Sparkles } from 'lucide-react'

const DEMOS = [
  {
    slug: 'sharma-salon',
    name: 'Sharma Hair Salon',
    category: 'Salon',
    accent: '#D97706',
  },
  {
    slug: 'ramesh-garage',
    name: 'Ramesh Auto Garage',
    category: 'Auto Repair',
    accent: '#1E40AF',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Smart SMS — Business Pages'
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
        <div className="container-page relative py-20 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <Sparkles className="h-3.5 w-3.5" />
              Smart SMS · Business Pages
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              A premium page for every business.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
              Every customer gets a beautiful, mobile-ready landing page at{' '}
              <span className="font-semibold text-white">yourdomain.com/&#123;slug&#125;</span>
              {' '}— opened straight from an auto-reply SMS.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
            {DEMOS.map((demo) => (
              <Link
                key={demo.slug}
                to={`/${demo.slug}`}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition group-hover:scale-125"
                  style={{ backgroundColor: `${demo.accent}55` }}
                />
                <div className="relative">
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                    style={{ backgroundColor: demo.accent }}
                  >
                    <MessageSquareText className="h-6 w-6" />
                  </span>
                  <p className="mt-5 font-display text-xl font-bold">{demo.name}</p>
                  <p className="mt-1 text-sm text-white/50">
                    {demo.category} · /{demo.slug}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white/80">
                    View live page
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-center text-xs text-white/40">
            Powered by Smart SMS — Asalkar Techworks Pvt Ltd ·{' '}
            <a href="https://www.asalkar.in" className="text-white/60 hover:underline">
              www.asalkar.in
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
