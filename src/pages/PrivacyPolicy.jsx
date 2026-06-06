import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Mail, ShieldCheck } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

const permissions = [
  {
    name: 'READ_CALL_LOG',
    purpose: "To detect completed calls and the caller's number so an automatic reply can be sent.",
  },
  {
    name: 'READ_PHONE_STATE',
    purpose: 'To detect call state such as ringing, answered, and ended, and to identify the SIM used for the call.',
  },
  {
    name: 'SEND_SMS',
    purpose: "To send the automatic SMS reply through the user's own SIM card.",
  },
  {
    name: 'READ_CONTACTS',
    purpose: 'To optionally skip sending SMS to phone numbers already saved as contacts on the device.',
  },
  {
    name: 'RECEIVE_BOOT_COMPLETED',
    purpose: 'To restart the call-monitoring service after the device is rebooted.',
  },
  {
    name: 'POST_NOTIFICATIONS',
    purpose: 'To show the foreground-service status notification required while monitoring calls.',
  },
  {
    name: 'FOREGROUND_SERVICE / special use',
    purpose: 'To keep the call-monitoring service running so Smart SMS can detect calls reliably.',
  },
]

function setMetaDescription(content) {
  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', 'description')
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function PolicySection({ title, children }) {
  return (
    <section className="border-t border-white/10 py-9">
      <h2 className="font-display text-2xl font-bold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-7 text-white/70">{children}</div>
    </section>
  )
}

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy · Smart SMS'
    setMetaDescription('Privacy Policy for the Smart SMS Android app by Asalkar Techworks Pvt Ltd.')
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <nav className="container-page flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Smart SMS Logo" className="h-6 w-auto object-contain" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Smart SMS
            </span>
            <span className="hidden text-sm font-medium text-white/40 sm:inline-block">
              by Asalkar.in
            </span>
          </Link>
          <a
            href="https://www.asalkar.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 text-sm font-semibold text-white/70 transition hover:text-white sm:flex"
          >
            Visit Main Site
            <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </nav>
      </header>

      <div className="relative overflow-hidden pt-24 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.22),transparent_70%)]" />
        <article className="container-page relative pb-20">
          <div className="mb-8 sm:mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 transition hover:text-white">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-semibold">Back to Home</span>
            </Link>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <ShieldCheck className="h-4 w-4 text-indigo-300" />
              Privacy Policy
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Smart SMS Privacy Policy
            </h1>
            <p className="mt-4 text-sm font-semibold text-indigo-200">
              Last updated: June 6, 2026
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Smart SMS is designed to work entirely on your Android device. The app does not
              send, upload, sell, or share your call, contact, SMS, business, settings, or history
              data with Asalkar Techworks Pvt Ltd, any server, cloud service, or third party.
            </p>

            <div className="mt-12">
              <PolicySection title="Introduction">
                <p>
                  Smart SMS is an Android app provided by Asalkar Techworks Pvt Ltd for business
                  users such as hotels, salons, clinics, shops, and similar service providers. The
                  app automatically sends a business SMS reply after a phone call, including missed,
                  answered, rejected, or outgoing calls.
                </p>
                <p>
                  This Privacy Policy explains how Smart SMS handles data on your device and why
                  the Android permissions requested by the app are needed.
                </p>
              </PolicySection>

              <PolicySection title="Information We Collect">
                <p>
                  Smart SMS does not collect personal data for the developer. The app runs fully
                  offline, has no backend, and does not transmit user data to any server, cloud, or
                  third party.
                </p>
                <p>
                  To perform its features, the app may read or store data locally on your device,
                  including call-log details needed to detect completed calls, SMS templates,
                  business profile information, app settings, and sent-SMS history. This data stays
                  on your device only.
                </p>
                <p>
                  The Smart SMS Android app does not use analytics SDKs, advertising SDKs, or
                  third-party tracking tools.
                </p>
              </PolicySection>

              <PolicySection title="How Permissions Are Used">
                <ul className="space-y-4">
                  {permissions.map((permission) => (
                    <li key={permission.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="font-mono text-sm font-semibold text-indigo-200">{permission.name}</p>
                      <p className="mt-2 text-white/70">{permission.purpose}</p>
                    </li>
                  ))}
                </ul>
              </PolicySection>

              <PolicySection title="Data Storage & Retention">
                <p>
                  All Smart SMS app data is stored locally on your Android device using a local
                  database and app preferences. This includes call information read for processing,
                  SMS templates, business profile data, settings, and sent-SMS history.
                </p>
                <p>
                  Because the app has no backend, Asalkar Techworks Pvt Ltd does not have access to
                  this local data. The data is removed from the device when Smart SMS is
                  uninstalled, subject to normal Android uninstall behavior.
                </p>
              </PolicySection>

              <PolicySection title="Data Sharing">
                <p>
                  Smart SMS does not share user data with anyone. We do not sell personal data, do
                  not provide data to advertisers, do not use third-party analytics in the Android
                  app, and do not upload app data to Asalkar Techworks Pvt Ltd.
                </p>
              </PolicySection>

              <PolicySection title="SMS & Carrier Charges">
                <p>
                  Automatic replies are sent through your own SIM card using standard carrier SMS.
                  Your mobile network operator may charge for SMS messages according to your
                  carrier plan. Smart SMS does not control carrier charges.
                </p>
              </PolicySection>

              <PolicySection title="Children's Privacy">
                <p>
                  Smart SMS is intended for business users and is not directed at children under
                  the age of 13. We do not knowingly collect personal data from children.
                </p>
              </PolicySection>

              <PolicySection title="Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. When changes are made, the
                  Last updated date at the top of this page will be revised. Continued use of Smart
                  SMS after an update means you accept the updated policy.
                </p>
              </PolicySection>

              <PolicySection title="Contact">
                <p>
                  If you have questions about this Privacy Policy or Smart SMS, contact:
                </p>
                <div className="space-y-2 text-white/80">
                  <p className="font-semibold text-white">Asalkar Techworks Pvt Ltd</p>
                  <a
                    href="mailto:asalkartechworks@gmail.com"
                    className="inline-flex items-center gap-2 text-indigo-200 transition hover:text-white"
                  >
                    <Mail className="h-4 w-4" />
                    asalkartechworks@gmail.com
                  </a>
                  <p>
                    <a href="https://www.smartsms.in" className="text-indigo-200 transition hover:text-white">
                      www.smartsms.in
                    </a>
                  </p>
                </div>
              </PolicySection>
            </div>
          </div>
        </article>
      </div>
      <Analytics />
    </main>
  )
}
