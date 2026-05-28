// Eyebrow + large display title used to open each section.
export default function SectionHeading({ eyebrow, title, subtitle, center }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <div
          className={`mb-3 flex items-center gap-2 ${
            center ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-6 bg-accent/50" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-500">{subtitle}</p>
      )}
    </div>
  )
}
