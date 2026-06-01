import { Mail, Phone, User, CheckCircle2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { telLink } from '../utils/links.js'

export default function About({ business, lang }) {
  const { email, phone, alternatePhone, images } = business
  const description = lang === 'mr' ? (business.description_mr || business.description) : business.description
  const ownerName = lang === 'mr' ? (business.ownerName_mr || business.ownerName) : business.ownerName

  const ownerImage = images?.owner
  if (!description) return null

  return (
    <section id="about" className="scroll-mt-20 bg-white py-12 sm:py-20">
      <div className="container-page mx-auto max-w-4xl">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/40">
            {/* Information Text */}
            <div className="p-8 sm:p-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <CheckCircle2 className="h-5 w-5" strokeWidth={2.5} />
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {lang === 'mr' ? 'व्यवसाय माहिती' : 'Business Information'}
                </h2>
              </div>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                {description}
              </p>
            </div>

            {/* Contact Strip */}
            {(ownerName || phone || alternatePhone || email) && (
              <div className="flex flex-col gap-6 border-t border-slate-100 bg-slate-50 p-8 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-8">
                {ownerName && (
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                      {ownerImage ? (
                        <img src={ownerImage} alt={ownerName} className="h-full w-full object-cover" />
                      ) : (
                        <User className="h-5 w-5 text-slate-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{lang === 'mr' ? 'मालक' : 'Owner'}</p>
                      <p className="whitespace-pre-wrap text-sm font-semibold text-slate-900">{ownerName}</p>
                    </div>
                  </div>
                )}
                <div className="flex flex-col gap-3 sm:items-end">
                  {phone && (
                    <a href={telLink(phone)} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-accent">
                      <Phone className="h-4 w-4" /> {phone}
                    </a>
                  )}
                  {alternatePhone && (
                    <a href={telLink(alternatePhone)} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-accent">
                      <Phone className="h-4 w-4" /> {alternatePhone}
                    </a>
                  )}
                  {email && (
                    <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-accent">
                      <Mail className="h-4 w-4" /> {email}
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
