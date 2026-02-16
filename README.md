# City Hall Presentation Website (Primărie) — Angular SSR + Vite

Demo / presentation website for a city hall (Primărie), built with **Angular 21** + **Vite** and **SSR enabled**.  
Uses **fake/static content** that can later be replaced with real data or a CMS. Includes a simple **contact form backend** (Node.js + Express + Nodemailer).

---

## Tech Stack

### Frontend
- **Angular 21** (Standalone components, no `.component` suffix)
- **Vite** bundler
- **SSR enabled**
- Templates use **new Angular control flow** (`@if`, `@for`) — no `*ngIf`
- Styling: **SCSS per component** + `styles.scss` global
- Icons: **PrimeIcons** (no PrimeNG UI components, except Toolbar/Button usage in navigation/hero)
- Animations: **NOT used**

### Backend (Contact API)
- **Node.js + Express**
- **Nodemailer** (Gmail SMTP via App Password)
- Security basics:
  - Server-side validation
  - Honeypot field (`company`)
  - `replyTo` set to citizen email

---

## Content & Architecture Principles

- **Static content is centralized** in `src/app/data/site-content.ts`
- Content contains **raw values only** (text, phone, email, images)
- No behavior inside content files (no `mailto:`, no `tel:` strings stored there)
- Behavior belongs in templates/components:
  - `mailto:` and `tel:` links are built in HTML templates
- Reusable components, clean separation:
  - **content** vs **UI** vs **logic**

---

## Sections Implemented (Homepage)

### Hero
- Background image in `/assets`
- Blue gradient overlay
- CTA buttons manually styled
- Scroll hint arrow button

### About
- Light yellow background
- Stats grid
- Paragraphs
- CTA **“Citește mai mult”** → `/despre`

### Achievements (Realizările Noastre)
- Grid of cards + separate “Proiecte în desfășurare” list
- CTA **“Citește mai mult”** → `/realizari`

### Team (Echipa)
- Leader + members
- Email & phone links (mailto + tel)
- Email subject prefilled

### Contact
- Two-column layout
- Contact info + Public relations box
- Contact form with sending/sent/error UI states
- Honeypot field included (hidden)

### Footer
- Brand + quick links + contact
- Quick links scroll to sections

---

### Frontend
- Uses `ContactService` (`src/app/services/contact.service.ts`)
- Calls:
  - `POST http://localhost:3001/api/contact`
- UI states:
  - `sending`, `sent`, `errorMsg`
- Honeypot field:
  - `company` (must remain empty)

### Backend API
Located in `server/index.mjs`:

- `GET /api/health` → `{ ok: true }`
- `POST /api/contact` → sends email via SMTP

Validation rules (server-side):
- `company` must be empty (honeypot)
- name min length 2
- valid email regex
- subject min length 3
- message min length 10

---

## Environment Variables (Backend)

Create `server/.env`:

```env
PORT=3001
CORS_ORIGIN=http://localhost:4200

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true

SMTP_USER=your.email@gmail.com
SMTP_PASS=GMAIL_APP_PASSWORD

MAIL_TO=destination.email@gmail.com
MAIL_FROM_NAME=Primăria Comunei (Contact)
