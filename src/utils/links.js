// Helpers that turn JSON fields into the right app-opening URLs.

// Strip everything that isn't a digit (drops +, spaces, dashes).
export function digitsOnly(value = '') {
  return String(value).replace(/\D/g, '')
}

export function telLink(phone) {
  return `tel:${phone}`
}

// wa.me expects a country-coded number with no + or spaces.
export function whatsappLink(whatsapp, message = 'Hi, I saw your business page') {
  const number = digitsOnly(whatsapp)
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function upiLink(upiId, businessName) {
  const params = new URLSearchParams({
    pa: upiId,
    pn: businessName,
    cu: 'INR',
  })
  return `upi://pay?${params.toString()}`
}
