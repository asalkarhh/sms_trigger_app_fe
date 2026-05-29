import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function Navbar({ business }) {
  const { businessName, phone, whatsapp, images } = business
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
            {businessName}
          </span>
        </a>

        <div className="flex items-center gap-2">
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
              <span className="hidden sm:inline">Call now</span>
              <span className="sm:hidden">Call</span>
            </a>
          )}
        </div>
      </nav>
    </header>
  )
}
