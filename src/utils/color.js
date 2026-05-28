// Convert a hex colour (#RGB or #RRGGBB) into space-separated RGB channels,
// e.g. "#D97706" -> "217 119 6", for use with `rgb(var(--accent-rgb) / a)`.
export function hexToRgbChannels(hex, fallback = '15 23 42') {
  if (typeof hex !== 'string') return fallback
  let h = hex.trim().replace(/^#/, '')
  if (h.length === 3) {
    h = h
      .split('')
      .map((c) => c + c)
      .join('')
  }
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return fallback
  const num = parseInt(h, 16)
  const r = (num >> 16) & 255
  const g = (num >> 8) & 255
  const b = num & 255
  return `${r} ${g} ${b}`
}
