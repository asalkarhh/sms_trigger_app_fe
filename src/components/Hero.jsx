import { Phone, Navigation, UserPlus, BadgeCheck } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'
import { downloadVCard } from '../utils/vcard.js'
import WhatsAppIcon from './WhatsAppIcon.jsx'

function getDefaultBanner(category) {
  const cat = (category || '').toLowerCase()
  if (cat.includes('salon') || cat.includes('hair') || cat.includes('barber') || cat.includes('beauty')) {
    return 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop'
  }
  if (cat.includes('garage') || cat.includes('auto') || cat.includes('car')) {
    return 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=1600&auto=format&fit=crop'
  }
  if (cat.includes('bakery') || cat.includes('cake') || cat.includes('food')) {
    return 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop'
  }
  // Clean, tech/business online landing page background
  return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop'
}

export default function Hero({ business, lang }) {
  const { businessName, category, tagline, phone, whatsapp, mapLink, images } = business
  const banner = images?.banner || getDefaultBanner(category)
  const logo = images?.logo

  const displayBusinessName = lang === 'mr' ? (business.businessName_mr || businessName) : businessName
  const displayCategory = lang === 'mr' ? (business.category_mr || category) : category
  const displayTagline = lang === 'mr' ? (business.tagline_mr || tagline) : tagline

  return (
    <section id="top" className="relative flex min-h-[80svh] flex-col justify-end overflow-hidden bg-slate-950 pb-16 pt-32 sm:min-h-[70svh]">
      {/* Background image */}
      {banner && (
        <img
          src={banner}
          alt={`${businessName} banner`}
          className="absolute inset-0 h-full w-full object-contain object-bottom scale-105 animate-image-reveal"
          loading="eager"
        />
      )}
      
      {/* Editorial dark gradient sweep from bottom to top for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
      
      {/* Subtle dynamic accent overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--accent-color,transparent),transparent_60%)] opacity-30 mix-blend-overlay" />

      <div className="container-page relative z-10 w-full">

        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-8">
            
            {/* Floating Logo */}
            <div className="shrink-0 animate-fade-in-up">
              <div className="flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center overflow-hidden rounded-[2rem] bg-white/5 p-1 shadow-2xl ring-1 ring-white/30 backdrop-blur-xl">
                {logo ? (
                  <img
                    src={logo}
                    alt={`${businessName} logo`}
                    className="h-full w-full rounded-[1.75rem] object-cover"
                    loading="eager"
                  />
                ) : (
                  <span className="font-display text-5xl font-bold text-white shadow-sm">
                    {displayBusinessName?.charAt(0)}
                  </span>
                )}
              </div>
            </div>

            {/* Business Titles */}
            <div className="flex-1 pb-2 animate-fade-in-up [animation-delay:100ms]">
              {displayCategory && (
                <span className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {displayCategory}
                </span>
              )}
              <h1 className="flex flex-wrap items-center gap-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
                {displayBusinessName}
                <BadgeCheck className="h-7 w-7 text-blue-400 sm:h-9 sm:w-9" fill="white" aria-label="Verified Business" />
              </h1>
              {displayTagline && (
                <p className="mt-3 max-w-xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl">
                  {displayTagline}
                </p>
              )}
            </div>
          </div>

          {/* Desktop CTAs (Hidden on mobile where StickyCTA takes over) */}
          <div className="mt-8 hidden sm:flex w-full animate-fade-in-up [animation-delay:200ms] flex-row items-center gap-4">
            {phone && !business.hideActionButtons && (
              <a
                href={telLink(phone)}
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110 active:scale-95"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                {lang === 'mr' ? 'कॉल करा' : 'Call Now'}
              </a>
            )}
            {whatsapp && !business.hideActionButtons && (
              <a
                href={whatsappLink(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-slate-50 active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                {lang === 'mr' ? 'व्हॉट्सॲप' : 'WhatsApp'}
              </a>
            )}
            {mapLink && !business.hideActionButtons && (
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                <Navigation className="h-5 w-5" strokeWidth={2.5} />
                {lang === 'mr' ? 'दिशा' : 'Directions'}
              </a>
            )}
            {business.hideActionButtons && business.branches && business.branches[0]?.mapLink && (
              <a
                href={business.branches[0].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110 active:scale-95"
              >
                <Navigation className="h-5 w-5" strokeWidth={2.5} />
                {lang === 'mr' ? 'दिशा' : 'Directions'}
              </a>
            )}
            
            <button
              type="button"
              onClick={() => downloadVCard(business)}
              className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              <UserPlus className="h-4 w-4" strokeWidth={2} />
              {lang === 'mr' ? 'संपर्कात जतन करा' : 'Save to Contacts'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
