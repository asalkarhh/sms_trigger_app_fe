import { UserPlus } from 'lucide-react'
import { downloadVCard } from '../utils/vcard.js'

export default function SaveContactButton({ business, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => downloadVCard(business)}
      className={`flex min-h-[52px] w-full items-center justify-center gap-2 rounded-2xl bg-accent px-6 text-sm font-semibold text-white shadow-soft transition hover:brightness-110 active:scale-[0.98] ${className}`}
    >
      <UserPlus className="h-5 w-5" strokeWidth={2} />
      Save to Contacts
    </button>
  )
}
