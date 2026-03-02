# City Hall Presentation Website (Primărie)

Demo / presentation website for a Romanian city hall (Primărie), built with **Angular 21** and a small **Node.js + Express** backend for the contact form.

The project is intentionally **content-driven**, using static / fake data for now, and structured so it can later be connected to a real backend or CMS.

Liver server: https://cityhall-presentation.netlify.app/

---

## Tech Stack

### Frontend
- Angular 21
- Standalone components only (no NgModules)
- Angular Router
- New Angular control flow (`@if`, `@for`)
- SCSS (per component + global `styles.scss`)
- PrimeIcons (no heavy UI libraries)
- No animations (by design)

### Backend
- Node.js
- Express
- Nodemailer (SMTP)
- dotenv
- Basic validation + honeypot protection

---

## Frontend Content Architecture

- All static content lives in `src/app/data/site-content.ts`
- Content files contain **only raw data**:
  - text
  - labels
  - emails
  - phone numbers
  - image paths
- No behavior inside content (no `mailto:` / `tel:` there)
- Behavior (routing, scrolling, links) is handled in components/templates
- Clear separation between:
  - content
  - UI
  - logic

---

## Pages & Navigation

### Homepage (`/`)
Single-page layout composed of sections:
- Hero
- About
- Achievements
- Team
- Contact
- Footer

Navigation:
- Fixed
- Transparent over Hero
- Turns solid on scroll
- Scrolls to section IDs
- From other pages, navigates back to `/` and then scrolls

### Dedicated pages
- `/despre` — extended About / history page
- `/realizari` — achievements timeline page

---

## Achievements Page
- Timeline layout
- Year + title
- Click to expand full description
- No animations (intentional)

---

## Contact Form

### Frontend
- Two-column layout
- Contact info + public relations box
- Form UI states:
  - sending
  - success
  - error

### Backend
- Endpoint: `POST /api/contact`
- Server-side validation
- Honeypot field (`company`)
- `replyTo` set to sender email
- Environment-based configuration

---

## Development

### Frontend
npm install
npm start

### Backend
cd server
npm install
node index.mjs

### Production Build (Frontend)
npm run build

## Constraints & Intentions
- No CMS (yet)
- No authentication
- No heavy UI libraries
- Clean, readable, maintainable code
- Designed to be easily extended or handed over later

## License
This project is intended as a demo / presentation project.
