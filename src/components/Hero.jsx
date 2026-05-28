import { Phone, MessageCircle, Navigation, UserPlus, ChevronDown } from 'lucide-react'
import { telLink, whatsappLink } from '../utils/links.js'
import { downloadVCard } from '../utils/vcard.js'

export default function Hero({ business }) {
  const { businessName, category, tagline, phone, whatsapp, mapLink, images } = business
  const banner = images?.banner
  const logo = images?.logo

  return (
    <section id="top" className="relative flex min-h-[92svh] items-center overflow-hidden">
      {/* Background image */}
      {banner && (
        <img
          src={banner}
          alt={`${businessName} banner`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
      )}
      {/* Dark + accent gradient overlays for legibility and brand colour */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/55 to-slate-950/85" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgb(var(--accent-rgb)/0.45),transparent_70%)]" />
      {/* Floating accent glow */}
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 animate-float-slow rounded-full bg-accent/30 blur-3xl" />

      <div className="container-page relative z-10 py-28 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          {/* Logo */}
          <div className="animate-rise">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-3xl bg-white/10 p-1.5 shadow-glow ring-1 ring-white/20 backdrop-blur sm:h-28 sm:w-28">
              {logo ? (
                <img
                  src={logo}
                  alt={`${businessName} logo`}
                  className="h-full w-full rounded-2xl object-cover"
                  loading="eager"
                />
              ) : (
                <span className="font-display text-4xl font-bold text-white">
                  {businessName?.charAt(0)}
                </span>
              )}
            </div>
          </div>

          {/* Category eyebrow */}
          {category && (
            <span className="glass mt-6 animate-rise rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {category}
            </span>
          )}

          {/* Name */}
          <h1 className="mt-5 animate-rise font-display text-4xl font-bold leading-[1.05] tracking-tight text-white drop-shadow-sm sm:text-6xl">
            {businessName}
          </h1>

          {/* Tagline */}
          {tagline && (
            <p className="mt-5 max-w-xl animate-rise text-lg leading-relaxed text-white/85 sm:text-xl">
              {tagline}
            </p>
          )}

          {/* CTAs */}
          <div className="mt-9 flex w-full animate-rise flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
            {phone && (
              <a
                href={telLink(phone)}
                className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-accent px-7 text-base font-semibold text-white shadow-glow transition hover:brightness-110 active:scale-95"
              >
                <Phone className="h-5 w-5" strokeWidth={2.2} />
                Call now
              </a>
            )}
            {whatsapp && (
              <a
                href={whatsappLink(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-slate-900 shadow-soft transition hover:bg-white/90 active:scale-95"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
                WhatsApp
              </a>
            )}
            {mapLink && (
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 text-base font-semibold text-white transition hover:bg-white/20 active:scale-95"
              >
                <Navigation className="h-5 w-5" strokeWidth={2.2} />
                Directions
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={() => downloadVCard(business)}
            className="mt-5 inline-flex animate-rise items-center gap-2 text-sm font-medium text-white/80 underline-offset-4 transition hover:text-white hover:underline"
          >
            <UserPlus className="h-4 w-4" strokeWidth={2} />
            Save to contacts
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 animate-bounce-cue"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  )
}
