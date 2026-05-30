import { useEffect, useState } from 'react'
import { Phone, Globe } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function Navbar({ business, lang, setLang }) {
  const { phone, whatsapp, images } = business
  const displayBusinessName = lang === 'mr' ? (business.businessName_mr || business.businessName) : business.businessName
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-100 bg-white/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          {images?.logo && (
            <img
              src={images.logo}
              alt=""
              className={`h-9 w-9 rounded-full object-cover ring-2 transition ${
                scrolled ? 'ring-slate-100' : 'ring-white/40'
              }`}
            />
          )}
          <span
            className={`font-display text-base font-bold tracking-tight transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white drop-shadow'
            }`}
          >
            {displayBusinessName}
          </span>
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(l => (l === 'mr' ? 'en' : 'mr'))}
            className={`flex w-[105px] items-center justify-center gap-1.5 rounded-full border py-1.5 text-sm font-semibold transition active:scale-95 ${
              scrolled
                ? 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
                : 'border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20'
            }`}
          >
            <Globe className="h-4 w-4" />
            {lang === 'mr' ? 'English' : 'मराठी'}
          </button>
          {whatsapp && (
            <a
              href={whatsappLink(whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className={`hidden h-10 w-10 items-center justify-center rounded-full transition active:scale-90 sm:flex ${
                scrolled
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'glass text-white'
              }`}
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          {phone && (
            <a
              href={telLink(phone)}
              className="flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white shadow-soft transition active:scale-95"
            >
              <Phone className="h-[16px] w-[16px]" strokeWidth={2.2} />
              <span className="hidden sm:inline">{lang === 'mr' ? 'आता कॉल करा' : 'Call now'}</span>
              <span className="sm:hidden">{lang === 'mr' ? 'कॉल' : 'Call'}</span>
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}
