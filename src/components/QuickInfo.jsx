import { Clock, Phone, MapPin } from 'lucide-react'
import { telLink } from '../utils/links.js'

const DAY_INDEX_TO_KEY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

function Card({ icon: Icon, label, value, sub, href }) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
        <Icon className="h-5 w-5" strokeWidth={2} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </span>
        <span className="block truncate text-sm font-semibold text-slate-900">{value}</span>
        {sub && <span className="block truncate text-xs text-slate-400">{sub}</span>}
      </span>
    </>
  )

  const cls =
    'flex items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-soft transition'

  return href ? (
    <a href={href} className={`${cls} hover:-translate-y-0.5 active:scale-[0.99]`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function QuickInfo({ business }) {
  const { phone, address, hours } = business
  const todayKey = DAY_INDEX_TO_KEY[new Date().getDay()]
  const todayHours = hours?.[todayKey]
  const closed = !todayHours || /closed/i.test(todayHours)

  return (
    <div className="container-page relative z-20 -mt-14 sm:-mt-16">
      <div className="grid gap-3 sm:grid-cols-3">
        <Card
          icon={Clock}
          label={closed ? 'Closed today' : 'Open today'}
          value={todayHours || 'Closed'}
        />
        {phone && (
          <Card icon={Phone} label="Call us" value={phone} href={telLink(phone)} />
        )}
        {address && <Card icon={MapPin} label="Visit us" value={address} />}
      </div>
    </div>
  )
}
