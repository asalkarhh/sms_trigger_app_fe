import { IndianRupee, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { upiLink } from '../utils/links.js'

export default function PayButton({ business }) {
  const payment = business.payment || {}
  if (!payment.showPayButton || !payment.upiId) return null

  return (
    <section id="pay" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-accent to-accent/70 p-8 shadow-glow sm:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                  <ShieldCheck className="h-4 w-4" strokeWidth={2.2} />
                  Secure UPI payment
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Pay {business.businessName}
                </h2>
                <p className="mt-1 text-sm text-white/75">
                  Opens your UPI app · {payment.upiId}
                </p>
              </div>

              <a
                href={upiLink(payment.upiId, business.businessName)}
                className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-bold text-slate-900 shadow-soft transition hover:bg-white/90 active:scale-[0.98] sm:w-auto"
              >
                <IndianRupee className="h-5 w-5" strokeWidth={2.5} />
                Pay Now
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
