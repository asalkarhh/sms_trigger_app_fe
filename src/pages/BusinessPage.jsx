import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import QuickInfo from '../components/QuickInfo.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Gallery from '../components/Gallery.jsx'
import VisitUs from '../components/VisitUs.jsx'
import PayButton from '../components/PayButton.jsx'
import Footer from '../components/Footer.jsx'
import MobileActionBar from '../components/MobileActionBar.jsx'
import { hexToRgbChannels } from '../utils/color.js'
import { Instagram } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

const STATUS = { LOADING: 'loading', READY: 'ready', NOT_FOUND: 'not_found' }

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content || '')
}

export default function BusinessPage() {
  const { slug } = useParams()
  const [status, setStatus] = useState(STATUS.LOADING)
  const [business, setBusiness] = useState(null)
  const [lang, setLang] = useState('mr') // Default entire page to Marathi

  useEffect(() => {
    let cancelled = false
    setStatus(STATUS.LOADING)
    setBusiness(null)
    window.scrollTo(0, 0)

    fetch(`/businesses/${slug}.json`)
      .then((res) => {
        if (!res.ok) throw new Error('not found')
        return res.json()
      })
      .then((data) => {
        if (cancelled) return
        setBusiness(data)
        setStatus(STATUS.READY)
      })
      .catch(() => {
        if (cancelled) return
        setStatus(STATUS.NOT_FOUND)
      })

    return () => {
      cancelled = true
    }
  }, [slug])

  useEffect(() => {
    if (status === STATUS.READY && business) {
      document.title = `${business.businessName} · ${business.category}`
      setMetaDescription(business.tagline || business.description)
    } else if (status === STATUS.NOT_FOUND) {
      document.title = 'Business not found · Smart SMS'
    }
  }, [status, business])

  if (status === STATUS.LOADING) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-white">
        <div
          className="h-10 w-10 animate-spin rounded-full border-[3px] border-slate-200 border-t-slate-900"
          role="status"
          aria-label="Loading"
        />
        <p className="text-sm text-slate-400">Loading…</p>
      </div>
    )
  }

  if (status === STATUS.NOT_FOUND) {
    return <NotFound />
  }

  const accentRgb = hexToRgbChannels(business.theme?.accentColor)

  return (
    <div style={{ '--accent-rgb': accentRgb }} className="min-h-screen bg-white">
      <Navbar business={business} lang={lang} setLang={setLang} />
      <Hero business={business} lang={lang} />
      <QuickInfo business={business} lang={lang} />

      <About business={business} lang={lang} />
      <Services business={business} lang={lang} />
      
      {/* Custom Instagram Banner (Shows Below Services) */}
      {business.showInstagramBanner && business.social?.instagram && (
        <div className="container-page pb-16 sm:pb-24">
          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-[2px] shadow-lg">
            <div className="rounded-[1.4rem] bg-white px-6 py-10 text-center sm:px-10">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-md">
                <Instagram className="h-8 w-8" />
              </div>
              <h3 className="mb-8 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                {lang === 'mr' ? 'आमच्याशी इन्स्टाग्रामवर कनेक्ट व्हा' : 'Connect with us on Instagram'}
              </h3>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600 sm:w-auto">
                  <Instagram className="h-5 w-5" />
                  {lang === 'mr' ? (business.social.instagramText_mr || business.social.instagramText) : business.social.instagramText}
                </a>
                {business.social.alternateInstagram && (
                  <a href={business.social.alternateInstagram} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 sm:w-auto">
                    <Instagram className="h-5 w-5" />
                    {lang === 'mr' ? (business.social.alternateInstagramText_mr || business.social.alternateInstagramText) : business.social.alternateInstagramText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Gallery business={business} lang={lang} />
      <VisitUs business={business} lang={lang} />
      <PayButton business={business} lang={lang} />

      <Footer business={business} lang={lang} />

      {/* Spacer so the fixed mobile bar never covers footer content */}
      <div className="h-20 sm:hidden" />
      <MobileActionBar business={business} lang={lang} />
      <Analytics />
    </div>
  )
}
