import { Clock, MapPin, Phone } from 'lucide-react'
import { telLink } from '../utils/links.js'

export default function QuickInfo({ business }) {
  const { hours, address, phone } = business
  
  // Get today's hours elegantly
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const todayKey = days[new Date().getDay()]
  const todaysHours = hours?.[todayKey] || 'Closed'
  const isOpen = todaysHours.toLowerCase() !== 'closed'

  return (
    <div className="container-page relative z-20 -mt-8 sm:-mt-12 mb-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 sm:p-8 animate-fade-in-up [animation-delay:300ms]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          
          {/* Status & Hours */}
          <div className="group flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Status</p>
              <p className="text-base font-semibold tracking-wide text-slate-900">
                {isOpen ? <span className="text-emerald-600">Open Now</span> : <span className="text-rose-600">Closed Today</span>}
                <span className="ml-2 hidden text-sm font-normal text-slate-500 sm:inline-block">({todaysHours})</span>
              </p>
            </div>
          </div>

          {/* Address Snippet */}
          {address && (
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-500">Location</p>
                <p className="text-sm font-semibold tracking-wide text-slate-900 line-clamp-1">{address}</p>
              </div>
            </div>
          )}

          {/* Phone Snippet */}
          {phone && (
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">Call Us</p>
                <a href={telLink(phone)} className="text-base font-semibold tracking-wide text-slate-900 transition hover:text-accent">{phone}</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}