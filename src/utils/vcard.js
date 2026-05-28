// vCard (3.0) generation from a business JSON object.
// Produces a downloadable .vcf so visitors can save the business to their phone.

// vCard spec requires escaping of \ , ; and newlines in text values.
function escapeValue(value = '') {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
}

export function buildVCard(business) {
  const {
    businessName = '',
    ownerName = '',
    phone = '',
    whatsapp = '',
    email = '',
    address = '',
    social = {},
  } = business || {}

  const lines = ['BEGIN:VCARD', 'VERSION:3.0']

  // N (structured name) + FN (display name) — both required by the spec.
  lines.push(`N:${escapeValue(businessName)};;;;`)
  lines.push(`FN:${escapeValue(businessName)}`)
  lines.push(`ORG:${escapeValue(businessName)}`)

  if (ownerName) lines.push(`NOTE:${escapeValue(`Owner: ${ownerName}`)}`)
  if (phone) lines.push(`TEL;TYPE=CELL,VOICE:${escapeValue(phone)}`)
  if (whatsapp && whatsapp !== phone) {
    lines.push(`TEL;TYPE=CELL:${escapeValue(whatsapp)}`)
  }
  if (email) lines.push(`EMAIL;TYPE=INTERNET:${escapeValue(email)}`)
  if (address) {
    // ADR fields: PO;Ext;Street;City;Region;Postal;Country — put the whole
    // freeform address in the Street slot to keep it intact across phones.
    lines.push(`ADR;TYPE=WORK:;;${escapeValue(address)};;;;`)
  }
  if (social.website) lines.push(`URL:${escapeValue(social.website)}`)

  lines.push('END:VCARD')
  return lines.join('\r\n')
}

export function downloadVCard(business) {
  const vcf = buildVCard(business)
  const blob = new Blob([vcf], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = `${business.slug || 'contact'}.vcf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  // Give the browser a tick to start the download before revoking.
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
