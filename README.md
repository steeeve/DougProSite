# Doug Pro — Handyman Services

A one-page marketing site for **Doug Pro — Handyman Services**, a local
handyman business based in Calgary, AB, Canada, run by Doug.

Built with **Next.js (App Router)**, **React 19**, and **TypeScript**. The
visual design lives in a single global stylesheet (`app/globals.css`); the UI
is split into small components under `components/`.

## What's on the site

- **Header** with a burger menu (opens a dropdown, closes on link click / outside click / Escape)
- **Hero** with Doug's photo, headline, and call-to-action buttons
- **About** telling Doug's story (Boy Scouts, learning from his grandpa, love of lasting work)
- **Services** grid covering all nine services Doug offers
- **Gallery** — a rotating carousel of real work photos with thumbnails, auto-advancing every 5s and resetting the timer on any manual switch (next/prev, thumbnail click, arrow keys). Pauses on hover/focus.
- **Contact** section with a quote-request form and contact details
- Responsive layout, scroll-reveal animations, keyboard-friendly gallery

## Getting started

```bash
npm install      # first time only
npm run dev       # start the dev server → http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm start         # run the production server
npm run lint      # lint
```

## Project structure

```
DougProSite/
├── app/
│   ├── layout.tsx       # root layout, metadata, favicon, imports globals.css
│   ├── page.tsx         # composes the sections
│   └── globals.css      # all styling (single global stylesheet)
├── components/
│   ├── Header.tsx       # client — burger menu
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Gallery.tsx      # client — rotating carousel
│   ├── Contact.tsx      # client — form state
│   ├── Footer.tsx
│   └── ScrollReveal.tsx # client — IntersectionObserver reveal animation
├── public/
│   └── assets/          # Doug's profile photo + work gallery photos
├── package.json
├── tsconfig.json
├── next.config.mjs
└── README.md
```

## Replace the images

All images live in `public/assets/` and are referenced with absolute paths
(e.g. `/assets/doug-profile.png`).

- **Doug's profile photo** — `public/assets/doug-profile.png`. To use a
  different photo, replace that file or update the `src` in
  `components/Hero.tsx`.

- **Gallery work photos** — configured in the `GALLERY` array at the top of
  `components/Gallery.tsx`. To add more, drop new photos into `public/assets/`
  and append entries:

  ```tsx
  { src: "/assets/photo-new-job.jpg", alt: "Description of the job", caption: "Service Name" },
  ```

  The carousel and thumbnails build themselves automatically. Recommended
  image size: ~1200×800 px or larger, landscape orientation.

- **Favicon** — `public/assets/favicon.svg` can be replaced with Doug's logo.

## Update contact details

Edit `components/Contact.tsx` (phone, email, hours, area) to Doug's real info.
The phone/email also appear in the `tel:` / `mailto:` links — update those too.

## Make the contact form actually send

The form is front-end only right now (it shows a "thank you" message but
doesn't deliver anything). To receive submissions, connect a form backend:

- **Formspree** — set the form's `action` to your Formspree endpoint and submit
  normally (remove `e.preventDefault()`).
- **Netlify Forms** — add `data-netlify="true"` to the `<form>` and deploy to
  Netlify.
- **Your own endpoint** — POST the form data to your server in the submit
  handler.

## Tech notes

- Next.js 15 App Router + React 19 + TypeScript.
- Fonts: Fraunces (headings) + Inter (body) via Google Fonts (link in
  `app/layout.tsx` — currently loaded via the `<link>` tags; for production
  performance you may switch to `next/font`).
- Images use plain `<img>` tags pointing at files in `public/`. For
  automatic optimization you can migrate them to `next/image`.
- Respects `prefers-reduced-motion` (handled in `globals.css`).
