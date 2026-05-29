import SectionHeading from './SectionHeading.jsx'
import Reveal from './Reveal.jsx'
import AddressBlock from './AddressBlock.jsx'

export default function VisitUs({ business }) {
  const hasAddress = !!business.address
  if (!hasAddress) return null

  return (
    <section id="visit" className="scroll-mt-20 bg-slate-50 py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Plan your visit"
            title="Location"
            subtitle="Get directions in one tap."
            center={true}
          />
        </Reveal>

        <div className="mt-10 mx-auto max-w-3xl">
          <Reveal delay={120}>
            <AddressBlock business={business} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
