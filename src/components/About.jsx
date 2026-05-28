import { Mail, Phone, User } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import SaveContactButton from './SaveContactButton.jsx'
import Reveal from './Reveal.jsx'
import { telLink } from '../utils/links.js'

export default function About({ business }) {
  const { description, ownerName, email, phone, businessName } = business
  if (!description) return null

  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="container-page grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="About" title={`Welcome to ${businessName}`} />
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{description}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-4xl border border-slate-100 bg-slate-50/70 p-6 shadow-soft sm:p-8">
            {ownerName && (
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <User className="h-5 w-5" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Owner
                  </p>
                  <p className="font-semibold text-slate-900">{ownerName}</p>
                </div>
              </div>
            )}

            <div className="mt-6 space-y-3 border-t border-slate-200/70 pt-6">
              {phone && (
                <a
                  href={telLink(phone)}
                  className="flex items-center gap-3 text-sm text-slate-600 transition hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" strokeWidth={2} />
                  {phone}
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 break-all text-sm text-slate-600 transition hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" strokeWidth={2} />
                  {email}
                </a>
              )}
            </div>

            <div className="mt-6">
              <SaveContactButton business={business} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
