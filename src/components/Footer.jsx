import { Phone, Mail } from 'lucide-react'
import SocialLinks from './SocialLinks.jsx'
import { telLink, whatsappLink } from '../utils/links.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function Footer({ business, lang }) {
  const { businessName, tagline, category, phone, whatsapp, images } = business || {}
  
  const displayBusinessName = lang === 'mr' ? (business?.businessName_mr || businessName) : businessName
  const displayCategory = lang === 'mr' ? (business?.category_mr || category) : category
  const displayTagline = lang === 'mr' ? (business?.tagline_mr || tagline) : tagline

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
                <p className="font-display text-lg font-bold">{displayBusinessName}</p>
                {displayCategory && <p className="text-sm text-white/50">{displayCategory}</p>}
              </div>
            </div>
            {displayTagline && (
              <p className="mt-4 text-sm leading-relaxed text-white/60">{displayTagline}</p>
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
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                {lang === 'mr' ? 'व्हॉट्सॲपवर चॅट करा' : 'Chat on WhatsApp'}
              </a>
            )}
            {business?.slug === 'shree-samarth-cosmetics' && business?.email && (
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent" strokeWidth={2.2} />
                {business.email}
              </a>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} {displayBusinessName}. {lang === 'mr' ? 'सर्व हक्क राखीव.' : 'All rights reserved.'}
          </p>
          <p className="text-xs text-white/45">
            Powered by <span className="font-semibold text-white/70">Smart SMS</span> —{' '}
            <a
              href="https://www.asalkar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              Asalkar Techworks Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
