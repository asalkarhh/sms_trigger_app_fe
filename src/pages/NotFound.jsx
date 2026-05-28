import { SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-8 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_30%,rgba(99,102,241,0.22),transparent_70%)]" />
      <div className="relative flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
          <SearchX className="h-9 w-9 text-white/70" strokeWidth={1.75} />
        </div>
        <h1 className="mt-8 font-display text-3xl font-bold sm:text-4xl">Business not found</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
          We couldn’t find the page you’re looking for. The link may be incorrect or
          the business may no longer be listed.
        </p>
        <a
          href="/"
          className="mt-8 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-white/90 active:scale-95"
        >
          Go to home
        </a>
        <p className="mt-16 text-xs text-white/40">
          Powered by Smart SMS — Asalkar Techworks Pvt Ltd
        </p>
      </div>
    </main>
  )
}
