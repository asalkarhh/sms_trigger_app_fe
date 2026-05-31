import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquareText, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react'

const DEMOS = [
  // 1. Asalkar Healthy Hub (Organic Oil Manufacturer)
  {
    slug: 'asalkar-healthy-hub',
    name: 'Asalkar Healthy Hub',
    name_mr: 'असलकर हेल्दी हब',
    category: 'Organic Oil Manufacturer',
    category_mr: 'सेंद्रिय तेल उत्पादक',
    accent: '#16a34a',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1600&auto=format&fit=crop',
  },
  // 2. Sudarshan Gas Repair Center (Appliance Repair)
  {
    slug: 'sudarshan-gas-repair',
    name: 'Sudarshan Gas Repair Center',
    name_mr: 'सुदर्शन गॅस रिपेअर सेंटर',
    category: 'Appliance Repair',
    category_mr: 'उपकरणे दुरुस्ती',
    accent: '#ea580c',
    image: 'https://images.openai.com/static-rsc-4/_HevTAY46GxkDwzG7RWfQWk_Sug4AkIEEG2gCi7v70xQi89WUaGD3alhURfKLtq85KE6stS_zfCydjBH64SxeNslj5TQpC1m11CYKFmoOi-K1mvu3WDmgN1K5oEvMN1jO_rsxgdd47O5ibcN8NW4ibekL2j7bkyuVV67uZ68kFM?purpose=inline',
  },
  // 3. Choundeshwri Auto Parts (Auto Parts)
  {
    slug: 'choundeshwri-auto-parts',
    name: 'Choundeshwri Auto Parts',
    name_mr: 'चौंडेश्वरी ऑटो पार्ट्स',
    category: 'Auto Parts',
    category_mr: 'ऑटो पार्ट्स',
    accent: '#2563eb',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop',
  },
  // 4. Kshitija's Creations (Handmade Jewelry)
  {
    slug: 'kshitijas-creations',
    name: "Kshitija's Creations",
    name_mr: "क्षितिजाज क्रिएशन्स",
    category: 'Custom Handmade Jewelry',
    category_mr: 'कस्टम हँडमेड ज्वेलरी',
    accent: '#d946ef',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
  },
  // 5. Morya Electronics
  {
    slug: 'morya-electronics',
    name: 'Morya Electronics',
    name_mr: 'मोरया इलेक्ट्रॉनिक्स',
    category: 'Electronics Retailer',
    category_mr: 'इलेक्ट्रॉनिक्स रिटेलर',
    accent: '#2563eb',
    image: 'https://images.openai.com/static-rsc-4/x1ROyvDnTaTBts07szi147gEOpXWGLk3jCU5A5GgdAtJXboELM7a0Hb4j8Uw8z4m1ZVXu0hITANoRKESC-xf7EU7LmPJpLds2iD6KoWc0NbzD0eHl5tzHmokuqFiXLH5cTWn1HMFVZuRLAmESYXueKh05cROJedu_rUtXig7LQdLcJphIOtdJD5XaM_xO0IJ?purpose=fullsize',
  },
  // 6. Vishwakarma Enterprises
  {
    slug: 'vishwakarma-enterprises',
    name: 'Vishwakarma Enterprises',
    name_mr: 'विश्वकर्मा एंटरप्रायजेस',
    category: 'Fabrication & Engineering',
    category_mr: 'फॅब्रिकेशन आणि इंजिनिअरिंग',
    accent: '#eab308',
    image: 'https://images.openai.com/static-rsc-4/x1ROyvDnTaTBts07szi147gEOpXWGLk3jCU5A5GgdAtJXboELM7a0Hb4j8Uw8z4m1ZVXu0hITANoRKESC-xf7EU7LmPJpLds2iD6KoWc0NbzD0eHl5tzHmokuqFiXLH5cTWn1HMFVZuRLAmESYXueKh05cROJedu_rUtXig7LQdLcJphIOtdJD5XaM_xO0IJ?purpose=fullsize',
  },
  // 7. Divate Auto Parts
  {
    slug: 'divate-auto-parts',
    name: 'Divate Auto Parts',
    name_mr: 'दिवाटे ऑटो पार्ट्स',
    category: 'Auto Parts',
    category_mr: 'ऑटो पार्ट्स',
    accent: '#2563eb',
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1600&auto=format&fit=crop',
  },
  // 8. Siddesh Super Shoppy
  {
    slug: 'siddesh-super-shoppy',
    name: 'Siddesh Super Shoppy',
    name_mr: 'सिद्धेश सुपर शॉपी',
    category: 'Super Shoppy',
    category_mr: 'सुपर शॉपी',
    accent: '#16a34a',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/3/403159872/HD/XG/QU/4364593/plastic-household-items-1000x1000.png',
  },
  // 9. Hotel Shivar
  {
    slug: 'hotel-shivar',
    name: 'Hotel Shivar',
    name_mr: 'हॉटेल शिवार',
    category: 'Restaurant',
    category_mr: 'रेस्टॉरंट',
    accent: '#16a34a',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
  },
  // 10. RK Graphics & Cinematic
  {
    slug: 'rk-graphics-cinematic',
    name: 'RK Graphics & Cinematic',
    name_mr: 'आर के ग्राफिक्स & सिनेमॅटिक',
    category: 'Graphic Design',
    category_mr: 'ग्राफिक डिझाइन',
    accent: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Smart SMS — Business Pages'
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Global Header connecting to the parent company */}
      <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <nav className="container-page flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* You can replace this Sparkles icon with an actual Asalkar logo image */}
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Smart SMS
            </span>
            <span className="hidden text-sm font-medium text-white/40 sm:inline-block">
              by Asalkar.in
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.asalkar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 text-sm font-semibold text-white/70 transition hover:text-white sm:flex"
            >
              Visit Main Site
              <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
        {/* Adjusted top padding (pt-32) to account for the new header */}
        <div className="container-page relative pb-20 pt-32 sm:pb-28 sm:pt-40">
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
                  <p className="mt-5 font-display text-xl font-bold">
                    {demo.name}
                  </p>
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
