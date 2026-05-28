import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'

export default function Services({ business }) {
  const services = business.services || []
  if (services.length === 0) return null

  return (
    <section id="services" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="What we offer"
            title="Our services"
            subtitle="Everything we do, under one roof."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service} delay={(i % 3) * 90}>
              <div className="group flex h-full items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/30">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="text-base font-semibold text-slate-800">{service}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
