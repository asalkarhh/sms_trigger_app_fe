# Smart SMS — Business Pages

A static React site that serves a **digital business card** for each customer at a
clean URL like `yourdomain.com/asalkar-healthy-hub`. Pages are opened when someone taps a
link in an auto-reply SMS sent by the **Smart SMS** Android app.

**One JSON file per business.** Adding a customer means dropping in one JSON file and
their images — no code changes, no editing shared files, no risk to other pages.

---

## Tech stack

- Vite + React 18
- React Router v6 (per-business URLs)
- Tailwind CSS (mobile-first)
- Lucide React (icons)
- No backend — pure static site, deployable to Netlify / Vercel / any static host.

---

## Run locally

```bash
npm install
npm run dev
```

Then open:

- http://localhost:5173/ — demo landing page (lists the sample businesses)

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

---

## How it works

1. The browser visits `yourdomain.com/{slug}`.
2. React reads the `{slug}` from the URL.
3. It fetches `/businesses/{slug}.json` from the `public` folder.
4. It renders the full business page from that JSON.
5. If the JSON doesn't exist → a clean **"Business not found"** page is shown.

The page title, meta description (for SMS link previews), and the accent colour are
all driven by the JSON, so every page feels personalised.

---

## How to add a new business

You do **not** need to touch any code. Follow these four steps:

### 1. Create the JSON file

- Copy `template.json` from the project root.
- Rename it to `{slug}.json`, where `{slug}` is the clean URL you want
  (lowercase, words separated by hyphens). Example: `gupta-bakery.json`.
- Place it in **`public/businesses/`**.

```
public/businesses/gupta-bakery.json
```

> The `slug` value **inside** the JSON must match the file name (without `.json`).

### 2. Add the images

- Create a folder: **`public/images/{slug}/`**
- Add the business images into it:
  - `logo.jpg` — square logo (shown as a circle)
  - `banner.jpg` — wide banner (recommended ~800×400)
  - `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg` … — any number of photos

```
public/images/gupta-bakery/
├── logo.jpg
├── banner.jpg
├── gallery-1.jpg
├── gallery-2.jpg
└── gallery-3.jpg
```

> No photos yet? You can point any image field at a placeholder URL such as
> `https://placehold.co/800x400/D97706/white?text=Gupta+Bakery` (this is what the
> two bundled demo businesses use).

### 3. Fill in the JSON fields

Open your new `{slug}.json` and fill in every field. The schema is below.
Empty fields are handled gracefully — e.g. leave `social.youtube` as `""` and the
YouTube icon simply won't appear; set `payment.showPayButton` to `false` and the
whole Pay section is hidden.

### 4. Build & deploy

```bash
npm run build
```

Deploy the generated `dist/` folder to your static host (Netlify, Vercel, etc.).
The new page is live at `yourdomain.com/{slug}`.

> **Deep-link routing:** because URLs like `/gupta-bakery` are handled by the React
> router, the host must serve `index.html` for all paths. This repo already includes
> `public/_redirects` (Netlify) and `vercel.json` (Vercel) to do exactly that. For
> other hosts, add an equivalent SPA fallback / catch-all rewrite to `index.html`.

---

## JSON schema

Every business file follows this exact structure:

| Field | Type | Notes |
|---|---|---|
| `slug` | string | Must match the file name. Used in the URL. |
| `businessName` | string | Large heading + used for the saved contact name. |
| `ownerName` | string | Shown in About; saved as a note in the vCard. |
| `category` | string | Shown as a badge + in the browser tab title. |
| `tagline` | string | Short line under the name; used as the meta description. |
| `description` | string | About paragraph. |
| `phone` | string | `+91…` — powers the **Call** button + saved contact. |
| `whatsapp` | string | `+91…` — powers the **WhatsApp** button. |
| `email` | string | Saved into the contact. |
| `address` | string | Shown in the Location section + saved contact. |
| `mapLink` | string | Google Maps URL for **Directions** / **Get Directions**. |
| `hours` | object | Keys `mon`–`sun`. Use `"Closed"` for closed days. Today's row is highlighted. |
| `services` | string[] | Rendered as pills. |
| `social` | object | `website`, `instagram`, `facebook`, `youtube`. Empty ones are hidden. |
| `payment.upiId` | string | UPI ID, e.g. `name@okaxis`. |
| `payment.showPayButton` | boolean | `false` hides the entire Pay section. |
| `images.logo` | string | Path or URL. |
| `images.banner` | string | Path or URL. |
| `images.gallery` | string[] | Any number of paths/URLs. Empty array hides the gallery. |
| `theme.accentColor` | string | Hex colour used for buttons & highlights. |

See `template.json` for a ready-to-copy blank, and the two files in
`public/businesses/` for filled-in examples.

---

## Page sections (top → bottom)

1. **Hero** — banner, circular logo, name, category badge, tagline
2. **Action buttons** — Call · WhatsApp · Directions
3. **Save Contact** — downloads a `.vcf` vCard to add the business to the phone
4. **About**
5. **Services** — pills
6. **Gallery** — responsive grid, lazy-loaded, tap to open a lightbox
7. **Business Hours** — today's row highlighted
8. **Location** — address + Get Directions
9. **Social links** — only platforms with a URL are shown
10. **Pay Now (UPI)** — only if `payment.showPayButton` is `true`
11. **Footer** — Powered by Smart SMS — Asalkar Techworks Pvt Ltd

---

## Project structure

```
smart-sms-pages/
├── public/
│   ├── businesses/        # one {slug}.json per business
│   ├── images/{slug}/     # images per business
│   ├── _redirects         # Netlify SPA fallback
│   └── favicon.svg
├── src/
│   ├── pages/             # BusinessPage, NotFound, Home
│   ├── components/        # Hero, ActionButtons, Gallery, Hours, …
│   ├── utils/             # vcard.js (vCard), links.js (tel/WhatsApp/UPI)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── template.json          # copy this for each new customer
├── vercel.json            # Vercel SPA fallback
└── …config files
```

---

Powered by **Smart SMS** — Asalkar Techworks Pvt Ltd · [www.asalkar.in](https://www.asalkar.in)
