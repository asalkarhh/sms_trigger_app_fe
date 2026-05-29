import { Phone, MessageCircle } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'

export default function StickyCTA({ business }) {
  const { phone, whatsapp } = business

  if (!phone && !whatsapp) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:hidden animate-fade-in-up [animation-delay:500ms]">
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-full bg-white/80 p-2 pr-3 shadow-2xl ring-1 ring-slate-900/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
        
        {phone && (
          <a
            href={telLink(phone)}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 py-3.5 text-sm font-semibold text-white shadow-md transition active:scale-95"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
        )}

        {whatsapp && (
          <a
            href={whatsappLink(whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#20bd5a] active:scale-95"
          >
            <MessageCircle className="h-[18px] w-[18px]" />
            WhatsApp
          </a>
        )}
        
      </div>
    </div>
  )
}