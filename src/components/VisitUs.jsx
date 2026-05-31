import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import AddressBlock from './AddressBlock.jsx'
import { ArrowUpRight } from 'lucide-react'

export default function VisitUs({ business, lang }) {
  if (business.hideVisitUs) return null

  const hasAddress = !!business.address
  const hasBranches = business.branches && business.branches.length > 0
  if (!hasAddress && !hasBranches) return null

  return (
    <section id="visit" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow={lang === 'mr' ? 'तुमच्या भेटीचे नियोजन करा' : 'Plan your visit'}
            title={lang === 'mr' ? 'स्थान' : 'Location'}
            subtitle={lang === 'mr' ? 'एका टॅपवर दिशा मिळवा.' : 'Get directions in one tap.'}
            center={true}
          />
        </Reveal>

        <div className="mt-10 mx-auto max-w-3xl">
          <Reveal delay={120}>
            {hasBranches ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {business.branches.map((branch, idx) => (
                  <div key={idx} className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {lang === 'mr' ? (branch.name_mr || branch.name) : branch.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {lang === 'mr' ? (branch.address_mr || branch.address) : branch.address}
                      </p>
                    </div>
                    {branch.mapLink && (
                      <a
                        href={branch.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:opacity-80"
                      >
                        {lang === 'mr' ? 'दिशा मिळवा' : 'Get Directions'}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <AddressBlock business={business} lang={lang} />
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
