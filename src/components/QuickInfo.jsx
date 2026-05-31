import { MapPin, Phone, Instagram } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

export default function QuickInfo({ business, lang }) {
  const { phone, alternatePhone, whatsapp, mapLink } = business
  const displayAddress = lang === 'mr' ? (business.address_mr || business.address) : business.address

  return (
    <div className="container-page relative z-20 -mt-8 sm:-mt-12 mb-12">
      <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 sm:p-8 animate-fade-in-up [animation-delay:300ms]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">

          {/* Address Snippet */}
          {business.hideActionButtons && business.branches ? (
            <div className="col-span-full">
              <div className="mb-6 flex items-center justify-center gap-2 sm:justify-start">
                <MapPin className="h-5 w-5 text-accent" />
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {lang === 'mr' ? 'आमच्या शाखा' : 'Our Branches'}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {business.branches.map((branch, idx) => (
                  <a
                    key={idx}
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3 rounded-2xl border border-slate-100 p-4 transition hover:border-accent/30 hover:bg-accent/5 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 transition-colors group-hover:text-accent">
                        {lang === 'mr' ? (branch.name_mr || branch.name) : branch.name}
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-500 line-clamp-3">
                        {lang === 'mr' ? (branch.address_mr || branch.address) : branch.address}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : displayAddress && (
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-500">{lang === 'mr' ? 'स्थान' : 'Location'}</p>
                <p className="text-sm font-semibold tracking-wide text-slate-900 line-clamp-2 transition group-hover:text-accent">{displayAddress}</p>
              </div>
            </a>
          )}

          {/* Phone Snippet */}
          {phone && !business.hideActionButtons && (
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{lang === 'mr' ? 'आम्हाला कॉल करा' : 'Call Us'}</p>
                <a href={telLink(phone)} className="text-base font-semibold tracking-wide text-slate-900 transition hover:text-accent">{phone}</a>
                {alternatePhone && (
                  <a href={telLink(alternatePhone)} className="block text-sm font-medium tracking-wide text-slate-500 transition hover:text-accent">{alternatePhone}</a>
                )}
              </div>
            </div>
          )}

          {/* WhatsApp Snippet */}
          {whatsapp && !business.hideActionButtons && (
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#25D366]/10 group-hover:text-[#25D366]">
                <WhatsAppIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{lang === 'mr' ? 'आमच्याशी चॅट करा' : 'Chat with us'}</p>
                <a href={whatsappLink(whatsapp)} target="_blank" rel="noopener noreferrer" className="text-base font-semibold tracking-wide text-slate-900 transition hover:text-[#25D366]">{lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}</a>
              </div>
            </div>
          )}

          {/* Instagram Snippet */}
          {business.showInstagramInQuickInfo && business.social?.instagram && !business.hideActionButtons && (
            <div className="group flex items-center gap-4 overflow-hidden">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-[#E1306C]/10 group-hover:text-[#E1306C]">
                <Instagram className="h-6 w-6" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-medium text-slate-500">{lang === 'mr' ? 'इन्स्टाग्राम' : 'Instagram'}</p>
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="block truncate text-base font-semibold tracking-wide text-slate-900 transition hover:text-[#E1306C]">
                  {lang === 'mr' ? (business.social.instagramText_mr || business.social.instagramText || 'फॉलो करा') : (business.social.instagramText || 'Follow Us')}
                </a>
                {business.social?.alternateInstagram && (
                  <a href={business.social.alternateInstagram} target="_blank" rel="noopener noreferrer" className="block truncate text-sm font-medium tracking-wide text-slate-500 transition hover:text-[#E1306C]">
                    {lang === 'mr' ? (business.social.alternateInstagramText_mr || business.social.alternateInstagramText || 'दुसरे पेज') : (business.social.alternateInstagramText || 'Alternate Page')}
                  </a>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}