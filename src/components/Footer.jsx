import { Phone, MessageCircle } from 'lucide-react'
import SocialLinks from './SocialLinks.jsx'
import { telLink, whatsappLink } from '../utils/links.js'

export default function Footer({ business }) {
  const { businessName, tagline, category, phone, whatsapp, images } = business || {}

  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-page py-14 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Identity */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              {images?.logo && (
                <img
                  src={images.logo}
                  alt=""
                  className="h-11 w-11 rounded-2xl object-cover ring-1 ring-white/15"
                />
              )}
              <div>
                <p className="font-display text-lg font-bold">{businessName}</p>
                {category && <p className="text-sm text-white/50">{category}</p>}
              </div>
            </div>
            {tagline && (
              <p className="mt-4 text-sm leading-relaxed text-white/60">{tagline}</p>
            )}
            <div className="mt-6">
              <SocialLinks business={business} />
            </div>
          </div>

          {/* Quick contact */}
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {phone && (
              <a
                href={telLink(phone)}
                className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-accent" strokeWidth={2.2} />
                {phone}
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsappLink(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-accent" strokeWidth={2.2} />
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Powered by <span className="font-semibold text-white/70">Smart SMS</span> —
            Asalkar Techworks Pvt Ltd ·{' '}
            <a
              href="https://www.asalkar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              www.asalkar.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
