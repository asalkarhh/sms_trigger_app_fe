import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Gallery({ business }) {
  const images = business.images?.gallery?.filter(Boolean) || []
  const [openIndex, setOpenIndex] = useState(null)
  const isOpen = openIndex !== null

  const close = () => setOpenIndex(null)
  const prev = () => setOpenIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setOpenIndex((i) => (i + 1) % images.length)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, images.length])

  if (images.length === 0) return null

  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A look inside"
            subtitle="Tap any photo to view it full screen."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {images.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 80}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-3xl bg-slate-100 shadow-soft"
              >
                <img
                  src={src}
                  alt={`${business.businessName} photo ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition duration-300 group-hover:bg-slate-950/30 group-hover:opacity-100">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex animate-fade-in items-center justify-center bg-slate-950/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <figure className="flex max-h-[85vh] max-w-4xl flex-col items-center">
            <img
              src={images[openIndex]}
              alt={`${business.businessName} photo ${openIndex + 1}`}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <figcaption className="mt-3 text-sm text-white/60">
              {openIndex + 1} / {images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
