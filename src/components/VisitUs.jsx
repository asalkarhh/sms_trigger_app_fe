import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import AddressBlock from './AddressBlock.jsx'

export default function VisitUs({ business, lang }) {
  const hasAddress = !!business.address
  if (!hasAddress) return null

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
            <AddressBlock business={business} lang={lang} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
