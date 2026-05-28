import { Clock } from 'lucide-react'

const DAYS = [
  { key: 'mon', label: 'Monday' },
  { key: 'tue', label: 'Tuesday' },
  { key: 'wed', label: 'Wednesday' },
  { key: 'thu', label: 'Thursday' },
  { key: 'fri', label: 'Friday' },
  { key: 'sat', label: 'Saturday' },
  { key: 'sun', label: 'Sunday' },
]
const DAY_INDEX_TO_KEY = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

// Presentational card; the surrounding section is rendered by VisitUs.
export default function Hours({ business }) {
  const hours = business.hours
  if (!hours) return null

  const todayKey = DAY_INDEX_TO_KEY[new Date().getDay()]

  return (
    <div className="h-full rounded-4xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Clock className="h-5 w-5" strokeWidth={2} />
        </span>
        <h3 className="font-display text-xl font-bold text-slate-900">Business hours</h3>
      </div>

      <ul className="divide-y divide-slate-100">
        {DAYS.map(({ key, label }) => {
          const value = hours[key] || 'Closed'
          const isToday = key === todayKey
          const isClosed = /closed/i.test(value)
          return (
            <li
              key={key}
              className={`-mx-2 flex items-center justify-between rounded-xl px-2 py-3 text-sm ${
                isToday ? 'bg-accent/5' : ''
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className={isToday ? 'font-bold text-slate-900' : 'font-medium text-slate-600'}
                >
                  {label}
                </span>
                {isToday && (
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                    Today
                  </span>
                )}
              </span>
              <span
                className={
                  isClosed
                    ? 'font-medium text-slate-400'
                    : isToday
                      ? 'font-semibold text-accent'
                      : 'font-medium text-slate-700'
                }
              >
                {value}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
