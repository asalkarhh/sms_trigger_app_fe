import { Sparkles, Check } from 'lucide-react'
import Reveal from './Reveal.jsx'

export default function Services({ services }) {
  if (!services || services.length === 0) return null

  return (
    <section className="container-page bg-slate-50/30 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-10 flex flex-col items-center justify-center gap-3 text-center sm:mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900">
              Our Services
            </h2>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          {services.map((service, idx) => (
            <Reveal key={idx} delay={idx * 40}>
              <div className="group flex min-h-[4.5rem] cursor-default items-center justify-start gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-slate-50 hover:shadow-lg hover:shadow-accent/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <span className="text-sm font-semibold tracking-tight text-slate-700 transition-colors group-hover:text-accent sm:text-base text-left line-clamp-2">
                  {service}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}