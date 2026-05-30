import { MapPin, Navigation } from 'lucide-react'

// Presentational card; the surrounding section is rendered by VisitUs.
export default function AddressBlock({ business, lang }) {
  const { mapLink } = business
  const displayAddress = lang === 'mr' ? (business.address_mr || business.address) : business.address
  if (!displayAddress) return null

  const mapEmbed = mapLink 
    ? `https://maps.google.com/maps?q=${encodeURIComponent(displayAddress)}&z=15&output=embed` 
    : null

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-soft">
      {mapEmbed && (
        <div className="relative h-44 w-full">
          {/* This invisible link overlays the top-left corner of the map,
              intercepting clicks on the "Maps" button and redirecting to the
              correct `mapLink` instead of the iframe's generated address link. */}
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps"
            className="absolute left-0 top-0 z-10 h-16 w-48"
          />
          <iframe
            title="Map"
            src={mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 grayscale-[0.2]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <MapPin className="h-5 w-5" strokeWidth={2} />
          </span>
          <h3 className="font-display text-xl font-bold text-slate-900">{lang === 'mr' ? 'आम्हाला शोधा' : 'Find us'}</h3>
        </div>

        <p className="text-base leading-relaxed text-slate-600">{displayAddress}</p>

        {mapLink && (
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl bg-accent/10 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white active:scale-[0.98]"
          >
            <Navigation className="h-4 w-4" strokeWidth={2.2} />
            {lang === 'mr' ? 'दिशा मिळवा' : 'Get directions'}
          </a>
        )}
      </div>
    </div>
  )
}
