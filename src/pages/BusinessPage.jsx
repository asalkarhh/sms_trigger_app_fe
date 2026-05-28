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
      <Navbar business={business} />
      <Hero business={business} />
      <QuickInfo business={business} />

      <About business={business} />
      <Services business={business} />
      <Gallery business={business} />
      <VisitUs business={business} />
      <PayButton business={business} />

      <Footer business={business} />

      {/* Spacer so the fixed mobile bar never covers footer content */}
      <div className="h-20 sm:hidden" />
      <MobileActionBar business={business} />
    </div>
  )
}
