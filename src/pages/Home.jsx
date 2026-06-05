import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquareText, ArrowUpRight, Sparkles, ExternalLink, Mail } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

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
    category: 'Agriculture & Garden Tools',
    category_mr: 'शेती आणि गार्डन टूल्स',
    accent: '#eab308',
    image: '/vishwakarma-banner.jpg',
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
  // 11. Morya Bazar
  {
    slug: 'morya-bazar',
    name: 'Morya Bazar',
    name_mr: 'मोरया बाजार',
    category: 'Super Market',
    category_mr: 'सुपर मार्केट',
    accent: '#f97316',
    image: 'https://unsplash.com/photos/ivfp_yxZuYQ/download?w=1600',
  },
  // 12. Varad Tours and Travels
  {
    slug: 'varad-tours-and-travels',
    name: 'Varad Tours and Travels',
    name_mr: 'वरद टूर्स अँड ट्रॅव्हल्स',
    category: 'Tours & Travels',
    category_mr: 'टूर्स आणि ट्रॅव्हल्स',
    accent: '#0ea5e9',
    image: '/varad-tours.jpg',
  },
  //13. morya-catering-service
  {
  slug: "morya-catering-service",
  name: "Morya Catering Service",
  name_mr: "मोरया केटरिंग सर्व्हिस",
  category: "Catering Service",
  category_mr: "केटरिंग सर्व्हिस",
  accent: "#dc2626",
  image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop"
},
  // 14. Shree Samarth Cosmetics
  {
    slug: 'shree-samarth-cosmetics',
    name: 'Shree Samarth Cosmetics',
    name_mr: 'श्री समर्थ कॉस्मेटिक्स',
    category: 'Cosmetics',
    category_mr: 'कॉस्मेटिक्स',
    tagline: 'Beauty & Skin Care Products',
    tagline_mr: 'सौंदर्य आणि त्वचा निगा उत्पादने',
    accent: '#ec4899',
    image: 'https://img.magnific.com/free-photo/close-up-collection-make-up-beauty-products_23-2148620012.jpg?semt=ais_hybrid&w=740&q=80',
    email: 'shreesamarth4433@gmail.com',
  },
  // 15. Diet Wala
  {
    slug: 'diet-wala',
    name: 'Diet Wala',
    name_mr: 'डायट वाला',
    category: 'Diet Cafe & Supplement Store',
    category_mr: 'डायट कॅफे अँड सप्लिमेंट स्टोअर',
    accent: '#f97316',
    image: '/diatwala.png',
  },
  // 16. Mahadik Jewellers
  // {
  //   slug: 'mahadik-jewellers',
  //   name: 'Mahadik Jewellers',
  //   name_mr: 'महाडिक ज्वेलर्स',
  //   category: 'Jewelry Store',
  //   category_mr: 'ज्वेलरी स्टोअर',
  //   accent: '#f59e0b',
  //   image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600&auto=format&fit=crop',
  // },
]

export default function Home() {
  const [lang, setLang] = useState('mr')

  useEffect(() => {
    document.title = 'Smart SMS — Business Pages'
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Global Header connecting to the parent company */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <nav className="container-page flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Smart SMS Logo" className="h-6 w-auto object-contain" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Smart SMS
            </span>
            <span className="hidden text-sm font-medium text-white/40 sm:inline-block">
              {lang === 'mr' ? 'Asalkar.in द्वारा' : 'by Asalkar.in'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/download-app"
              className="rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-500 sm:px-5 sm:text-sm"
            >
              Download App
            </Link>
            <button
              onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
              className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white transition hover:bg-white/20"
            >
              {lang === 'en' ? 'मराठी' : 'English'}
            </button>
            <a
              href="https://www.asalkar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 text-sm font-semibold text-white/70 transition hover:text-white sm:flex"
            >
              {lang === 'mr' ? 'मुख्य साइटला भेट द्या' : 'Visit Main Site'}
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
              <img src="/logo.png" alt="Smart SMS Logo" className="h-3.5 w-auto object-contain" />
              {lang === 'mr' ? 'स्मार्ट SMS · बिझनेस पेजेस' : 'Smart SMS · Business Pages'}
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              {lang === 'mr' ? 'प्रत्येक व्यवसायासाठी एक प्रीमियम पेज.' : 'A premium page for every business.'}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/65">
              {lang === 'mr' ? (
                <>प्रत्येक ग्राहकाला <span className="font-semibold text-white">yourdomain.com/&#123;slug&#125;</span> वर एक सुंदर, मोबाईल-रेडी लँडिंग पेज मिळते — जे थेट ऑटो-रिप्लाय SMS मधून उघडते.</>
              ) : (
                <>Every customer gets a beautiful, mobile-ready landing page at{' '}
                <span className="font-semibold text-white">yourdomain.com/&#123;slug&#125;</span>
                {' '}— opened straight from an auto-reply SMS.</>
              )}
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Map over the DEMOS array to generate each business grid card */}
            {DEMOS.map((demo) => (
              <Link
                key={demo.slug}
                to={`/${demo.slug}`}
                onClick={() => {
                  if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'click_business_grid', {
                      'business_name': demo.name,
                      'business_slug': demo.slug,
                      'business_category': demo.category
                    })
                  }
                }}
                className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-white/20"
              >
                {/* Optional Background Image */}
                {demo.image && (
                  <div className="absolute inset-0 z-0 opacity-50 transition-opacity duration-300 group-hover:opacity-70">
                    <img src={demo.image} alt={demo.name} className="h-full w-full object-cover object-center" />
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
                    {lang === 'mr' ? (demo.name_mr || demo.name) : demo.name}
                  </p>
                  <p className="mt-1 text-sm text-white/50">
                    {lang === 'mr' ? (demo.category_mr || demo.category) : demo.category} · /{demo.slug}
                  </p>
                  {demo.tagline && (
                    <p className="mt-1.5 text-sm font-medium text-white/60">
                      {lang === 'mr' ? (demo.tagline_mr || demo.tagline) : demo.tagline}
                    </p>
                  )}
                  {demo.email && (
                    <div className="mt-2.5 flex items-center gap-1.5 text-sm text-white/60">
                      <Mail className="h-4 w-4" />
                      {demo.email}
                    </div>
                  )}
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white/80">
                    {lang === 'mr' ? 'थेट पेज पहा' : 'View live page'}
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-2 text-xs text-white/40">
            <p>
              {lang === 'mr' ? 'स्मार्ट SMS द्वारा समर्थित —  · ' : 'Powered by Smart SMS —  · '}
              <a href="https://www.asalkar.in" className="text-white/60 hover:underline">
                {lang === 'mr' ? 'असलकर टेकवर्क्स प्रायव्हेट लिमिटेड' : 'Asalkar Techworks Pvt Ltd'}
              </a>
            </p>
            <a href="mailto:info@asalkar.in" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white transition">
              <Mail className="h-3.5 w-3.5" />
              info@asalkar.in
            </a>
          </div>
        </div>
      </div>
      <Analytics />
    </main>
  )
}
