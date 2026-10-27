# Sumit Vyas & Nidhi Dave — Royal Hindu Wedding Invitation Website

Built using **Prompt 02 (Royal North Indian / Rajasthani Hindu Wedding — Vedic Vivah)** from the AI Luxury Wedding Invitation Blueprint.

## Wedding Details Configured
- **Couple**: Sumit Vyas & Nidhi Dave (`सुमित व्यास संग निधि दवे`)
- **Date**: Tuesday, 22nd February 2022 (`मंगलवार, २२ फरवरी २०२२`)
- **Venue**: Fairfield By Marriott Goa Benaulim, South Goa
- **Tradition & Theme**: Royal Hindu Vivah — Jodhpur Sandstone (`#FAF5EE`), Warm Champagne (`#F1E6D6`), Terracotta Rose (`#B85D4B`), Antique Brass (`#C29B58`), and Deep Espresso (`#2E241F`).

## Files in This Folder
- `index.html` — Main modular invitation website
- `config.js` — All wedding details, couple lineage, Groom-side & Bride-side host wording, 4 functions + Pheras sub-schedule, gallery items, and R.S.V.P. contacts
- `i18n.js` — Complete bilingual dictionary (`English` & `हिंदी` Devanagari)
- `styles.css` — Luxury stationery stylesheet, 3D gate animation, and `@media print` PDF layout
- `app.js` — 3D gate controller, audio controller, 3-layer parallax section-aware flower canvas, countdown, `.ics` generator, lightbox, and `#bride` router
- `monogram.svg` — Royal `S & N` wax seal crest
- `song.mp3` — Soft Indian classical instrumental loop (starts at 50% volume when tapping "Open Invitation")
- `preview.svg` — 1200×630 WhatsApp Open Graph link preview card
- `single-file/index.html` — All-in-one self-contained HTML file (combining `index.html`, `styles.css`, `config.js`, `i18n.js`, `app.js`, and inline SVG monogram) for instant preview or 1-file drag-and-drop hosting.

## Special URLs & Toggles
- **Default Groom's Family Invite (Vyas Parivar)**: Open `index.html`
- **Bride's Family Invite (Dave Parivar)**: Open `index.html#bride` (or click the **"Switch to Bride Side (#bride)"** button in the top bar / gate)
- **Language Toggle**: Click **हिंदी / English** on the opening gate or sticky top bar.
