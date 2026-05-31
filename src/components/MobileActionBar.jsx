import { Phone, Navigation } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

// Thumb-friendly fixed bar shown only on small screens.
export default function MobileActionBar({ business, lang }) {
  const { phone, whatsapp, mapLink } = business
  
  let actionsCount = [phone, whatsapp, mapLink].filter(Boolean).length
  if (business.hideActionButtons) {
    actionsCount = business.branches && business.branches[0]?.mapLink ? 1 : 0
  }
  if (actionsCount === 0) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-100 bg-white/90 backdrop-blur-xl sm:hidden">
      <div
        className="grid gap-2 px-4 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5"
        style={{ gridTemplateColumns: `repeat(${actionsCount}, minmax(0,1fr))` }}
      >
        {phone && !business.hideActionButtons && (
          <a
            href={telLink(phone)}
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-accent text-sm font-semibold text-white active:scale-95"
          >
            <Phone className="h-4 w-4" strokeWidth={2.2} />
            {lang === 'mr' ? 'कॉल' : 'Call'}
          </a>
        )}
        {whatsapp && !business.hideActionButtons && (
          <a
            href={whatsappLink(whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-accent/10 text-sm font-semibold text-accent active:scale-95"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {lang === 'mr' ? 'चॅट' : 'Chat'}
          </a>
        )}
        {mapLink && !business.hideActionButtons && (
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-slate-100 text-sm font-semibold text-slate-700 active:scale-95"
          >
            <Navigation className="h-4 w-4" strokeWidth={2.2} />
            {lang === 'mr' ? 'नकाशा' : 'Map'}
          </a>
        )}
        {business.hideActionButtons && business.branches && business.branches[0]?.mapLink && (
          <a
            href={business.branches[0].mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-accent text-sm font-semibold text-white active:scale-95"
          >
            <Navigation className="h-4 w-4" strokeWidth={2.2} />
            {lang === 'mr' ? 'नकाशा' : 'Map'}
          </a>
        )}
      </div>
    </div>
  )
}
