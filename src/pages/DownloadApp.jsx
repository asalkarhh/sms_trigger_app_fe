import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Download, CheckCircle2, AlertTriangle, ArrowLeft, Smartphone, ExternalLink } from 'lucide-react'
import { Analytics } from '@vercel/analytics/react'

export default function DownloadApp() {
  useEffect(() => {
    document.title = 'Download App · Smart SMS'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <nav className="container-page flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Smart SMS Logo" className="h-6 w-auto object-contain" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Smart SMS
            </span>
            <span className="hidden text-sm font-medium text-white/40 sm:inline-block">
              by Asalkar.in
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.asalkar.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 text-sm font-semibold text-white/70 transition hover:text-white sm:flex"
            >
              Visit Main Site
              <ExternalLink className="h-4 w-4 opacity-70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>
      </header>

      <div className="relative overflow-hidden pt-24 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.25),transparent_70%)]" />
        
        <div className="container-page relative pb-20">
          {/* Back to Home Button */}
          <div className="mb-8 sm:mb-12">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 transition hover:text-white">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-semibold">
                Back to Home
              </span>
            </Link>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md">
              <Smartphone className="h-10 w-10 text-indigo-400" />
            </div>
            
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              SmartSMS Android App
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65">
              Automatically send customized SMS messages for Incoming Calls, Missed Calls, Rejected Calls, and Outgoing Calls.
            </p>

            <div className="mt-10">
              <a
                href="https://drive.google.com/file/d/1TFHF9WiMMZra6xyM11aAVALpYiCiJ8FN/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 hover:shadow-indigo-600/40 active:scale-95"
              >
                <Download className="h-5 w-5" />
                Download SmartSMS APK
              </a>
            </div>
          </div>

          <div className="mx-auto mt-20 grid max-w-5xl gap-10 md:grid-cols-2">
            {/* Features */}
            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="mb-6 font-display text-2xl font-bold">Features</h2>
              <ul className="space-y-4">
                {[
                  'Automatic SMS on Missed Calls',
                  'Automatic SMS on Rejected Calls',
                  'Automatic SMS on Incoming Calls',
                  'Automatic SMS on Outgoing Calls',
                  'Custom SMS Templates',
                  'Business Information Integration',
                  'Click-to-Call Support',
                  'Google Maps Integration',
                  'Easy Configuration',
                  'Works Offline After Setup'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h2 className="mb-6 font-display text-2xl font-bold">Installation Instructions</h2>
              <ol className="space-y-5">
                {[
                  'Click the Download App button.',
                  'Download the APK file.',
                  'Allow installation from unknown sources if prompted.',
                  'Install the application.',
                  'Open SmartSMS and complete setup.'
                ].map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-white/70">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-300">
                      {idx + 1}
                    </span>
                    <span className="mt-0.5 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5 text-sm text-amber-200/80">
                <div className="mb-2 flex items-center gap-2 font-bold text-amber-400">
                  <AlertTriangle className="h-5 w-5" />
                  Important Note
                </div>
                <p className="leading-relaxed">
                  This application is distributed directly by SmartSMS and may require Android installation permission for apps installed outside the Google Play Store.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </main>
  )
}