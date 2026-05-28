/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Per-business accent injected as RGB channels so opacity modifiers
        // like bg-accent/10 and text-accent/60 work.
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(16,24,40,0.08), 0 12px 32px -12px rgba(16,24,40,0.14)',
        card: '0 1px 2px rgba(16,24,40,0.04), 0 20px 48px -20px rgba(16,24,40,0.22)',
        glow: '0 18px 50px -12px rgb(var(--accent-rgb) / 0.55)',
        ring: '0 0 0 1px rgba(16,24,40,0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'rise': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'bounce-cue': {
          '0%,100%': { transform: 'translateY(0)', opacity: '0.7' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out both',
        'scale-in': 'scale-in 0.2s ease-out both',
        'rise': 'rise 0.6s cubic-bezier(0.2,0.7,0.2,1) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'bounce-cue': 'bounce-cue 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
