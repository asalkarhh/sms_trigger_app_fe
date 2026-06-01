import { Globe, Instagram, Facebook, Youtube, Mail } from 'lucide-react'

const PLATFORMS = [
  { key: 'website', icon: Globe, label: 'Website' },
  { key: 'instagram', icon: Instagram, label: 'Instagram' },
  { key: 'facebook', icon: Facebook, label: 'Facebook' },
  { key: 'youtube', icon: Youtube, label: 'YouTube' },
  { key: 'mail', icon: Mail, label: 'Email' },
]

// Renders only platforms with a non-empty URL. Styled for a dark surface.
export default function SocialLinks({ business }) {
  const social = business.social || {}
  const links = PLATFORMS.filter((p) => social[p.key]?.trim())
  if (links.length === 0) return null

  return (
    <div className="flex gap-3">
      {links.map(({ key, icon: Icon, label }) => (
        <a
          key={key}
          href={social[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent active:scale-90"
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </a>
      ))}
    </div>
  )
}
