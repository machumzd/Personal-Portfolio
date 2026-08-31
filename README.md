# Abdul Mazood - Portfolio

Personal site for Abdul Mazood, Senior Full Stack Developer at Maxpo Exhibitions, Bengaluru.

**Live:** https://abdulmazood.netlify.app

## Stack

| Concern   | Choice                           | Why                                                                                                            |
| --------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router)          | Static export, so the site ships as plain files with no server to run or pay for.                              |
| Language  | TypeScript (strict)              | Content is typed, so a malformed project entry fails the build rather than the page.                           |
| Styling   | Plain CSS with custom properties | One design system in `app/globals.css`. No utility framework, no runtime CSS-in-JS.                            |
| Fonts     | Self-hosted via Fontsource       | No request to Google at build or run time. Deterministic CI builds, and no visitor IP handed to a third party. |

## Layout

```
app/
  layout.tsx     metadata, JSON-LD, fonts, no-flash theme script
  page.tsx       page composition - all sections
  globals.css    the entire design system
  sitemap.ts     generated sitemap
  robots.ts      generated robots.txt
components/
  SiteHeader.tsx  nav, scroll-spy, theme toggle (client)
  ContactForm.tsx contact form with validation (client)
lib/
  content.ts     every piece of copy on the site
public/
  og.png         social preview card
  favIcons/      icons and web manifest
```

**All copy lives in `lib/content.ts`.** To add a project or update a role, edit that file only - nothing in `app/` or `components/` needs to change.

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm run typecheck  # tsc --noEmit
```

## Deploying

`netlify.toml` is configured: build `npm run build`, publish `out`. Any static host works - the build output is plain HTML, CSS, JS and fonts.

## Contact form

Posts to a Google Apps Script webhook. Override the endpoint at build time:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT="https://..." npm run build
```

## Licence

MIT - see `LICENSE`.
