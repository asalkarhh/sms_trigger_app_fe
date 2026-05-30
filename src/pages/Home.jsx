import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquareText, ArrowUpRight, Sparkles } from 'lucide-react'

const DEMOS = [
  // 1. Asalkar Healthy Hub (Organic Oil Manufacturer)
  {
    slug: 'asalkar-healthy-hub',
    name: 'Asalkar Healthy Hub',
    category: 'Organic Oil Manufacturer',
    accent: '#16a34a',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1600&auto=format&fit=crop',
  },
  // 2. Sudarshan Gas Repair Center (Appliance Repair)
  {
    slug: 'sudarshan-gas-repair',
    name: 'Sudarshan Gas Repair Center',
    category: 'Appliance Repair',
    accent: '#ea580c',
    image: 'https://images.openai.com/static-rsc-4/_HevTAY46GxkDwzG7RWfQWk_Sug4AkIEEG2gCi7v70xQi89WUaGD3alhURfKLtq85KE6stS_zfCydjBH64SxeNslj5TQpC1m11CYKFmoOi-K1mvu3WDmgN1K5oEvMN1jO_rsxgdd47O5ibcN8NW4ibekL2j7bkyuVV67uZ68kFM?purpose=inline',
  },
  // 3. Choundeshwri Auto Parts (Auto Parts)
  {
    slug: 'choundeshwri-auto-parts',
    name: 'Choundeshwri Auto Parts',
    category: 'Auto Parts',
    accent: '#2563eb',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
  },
  // 4. Kshitija's Creations (Handmade Jewelry)
  {
    slug: 'kshitijas-creations',
    name: "Kshitija's Creations",
    category: 'Custom Handmade Jewelry',
    accent: '#d946ef',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
  },
  // 5. Morya Electronics
  {
    slug: 'morya-electronics',
    name: 'Morya Electronics',
    category: 'Electronics Retailer',
    accent: '#2563eb',
    image: 'https://images.openai.com/static-rsc-4/x1ROyvDnTaTBts07szi147gEOpXWGLk3jCU5A5GgdAtJXboELM7a0Hb4j8Uw8z4m1ZVXu0hITANoRKESC-xf7EU7LmPJpLds2iD6KoWc0NbzD0eHl5tzHmokuqFiXLH5cTWn1HMFVZuRLAmESYXueKh05cROJedu_rUtXig7LQdLcJphIOtdJD5XaM_xO0IJ?purpose=fullsize',
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

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Map over the DEMOS array to generate each business grid card */}
            {DEMOS.map((demo) => (
              <Link
                key={demo.slug}
                to={`/${demo.slug}`}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/20"
              >
                {/* Optional Background Image */}
                {demo.image && (
                  <div className="absolute inset-0 z-0 opacity-50 transition-opacity duration-300 group-hover:opacity-70">
                    <img src={demo.image} alt={demo.name} className="h-full w-full object-cover" />
                    {/* Dark gradient overlay so the white text stays readable */}
                    <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors" />
                  </div>
                )}
                <div
                  className="absolute -right-10 -top-10 z-0 h-32 w-32 rounded-full blur-2xl transition group-hover:scale-125"
                  style={{ backgroundColor: `${demo.accent}55` }}
                />
                <div className="relative z-10">
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
            Powered by Smart SMS —  ·{' '}
            <a href="https://www.asalkar.in" className="text-white/60 hover:underline">
              Asalkar Techworks Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
