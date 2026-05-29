import { Phone, MessageCircle, Navigation, UserPlus, BadgeCheck } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'
import { downloadVCard } from '../utils/vcard.js'

export default function Hero({ business }) {
  const { businessName, category, tagline, phone, whatsapp, mapLink, images } = business
  const banner = images?.banner
  const logo = images?.logo

  return (
    <section id="top" className="relative flex min-h-[80svh] flex-col justify-end overflow-hidden pb-16 pt-32 sm:min-h-[70svh]">
      {/* Background image */}
      {banner && (
        <img
          src={banner}
          alt={`${businessName} banner`}
          className="absolute inset-0 h-full w-full object-cover scale-105 animate-image-reveal"
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
                    {businessName?.charAt(0)}
                  </span>
                )}
              </div>
            </div>

            {/* Business Titles */}
            <div className="flex-1 pb-2 animate-fade-in-up [animation-delay:100ms]">
              {category && (
                <span className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur-md">
                  {category}
                </span>
              )}
              <h1 className="flex flex-wrap items-center gap-3 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl">
                {businessName}
                <BadgeCheck className="h-7 w-7 text-blue-400 sm:h-9 sm:w-9" fill="white" aria-label="Verified Business" />
              </h1>
              {tagline && (
                <p className="mt-3 max-w-xl text-lg font-light leading-relaxed text-slate-200 sm:text-xl">
                  {tagline}
                </p>
              )}
            </div>
          </div>

          {/* Desktop CTAs (Hidden on mobile where StickyCTA takes over) */}
          <div className="mt-8 hidden sm:flex w-full animate-fade-in-up [animation-delay:200ms] flex-row items-center gap-4">
            {phone && (
              <a
                href={telLink(phone)}
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-accent px-8 text-base font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110 active:scale-95"
              >
                <Phone className="h-5 w-5" strokeWidth={2.5} />
                Call Now
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsappLink(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-slate-900 shadow-xl transition hover:bg-slate-50 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
                WhatsApp
              </a>
            )}
            {mapLink && (
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[56px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                <Navigation className="h-5 w-5" strokeWidth={2.5} />
                Directions
              </a>
            )}
            
            <button
              type="button"
              onClick={() => downloadVCard(business)}
              className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              <UserPlus className="h-4 w-4" strokeWidth={2} />
              Save to Contacts
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
