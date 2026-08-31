# Abdul Mazood

**Senior Full Stack Developer** · Bengaluru, India

I build scalable SaaS platforms end to end — React.js and Next.js on the front, Nest.js, Node.js, GraphQL and PostgreSQL behind them. 3.9+ years shipping production web applications, currently at [Maxpo Exhibitions](https://maxpoexhibitions.com), where I architected a multi-tenant platform that runs nine live products from a single codebase.

🌐 **[abdulmazood.netlify.app](https://abdulmazood.netlify.app)** — my portfolio (this repository)

---

## What I do

I own features from component architecture and state management through API design, database schema, third-party integrations and deployment. I have shipped as the only developer on a project and as the senior on a team.

| | |
| --- | --- |
| **Languages** | TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3 |
| **Frontend** | React.js, Next.js, Redux, Tailwind CSS, MUI, Sass |
| **Backend** | Node.js, Nest.js, Express.js, GraphQL, REST APIs, Socket.io, Microservices |
| **Databases** | PostgreSQL, MongoDB, MySQL, Prisma, Redis, BullMQ |
| **DevOps & tools** | Docker, AWS, CI/CD, Git, Vercel, Netlify, Supabase, Postman, Figma |
| **Integrations** | Stripe, WhatsApp Business API, LinkedIn API, OpenAI APIs, SendGrid, Google Analytics |
| **Practices** | JWT & RBAC, Agile, Jest, code review, SEO, performance tuning |

---

## Selected work

**Multi-tenant CMS, CRM & HRMS** — *internal platform, Maxpo Exhibitions*
The system the products below run on. One codebase serving nine tenant sites, with role-based access control, audit trails, and email, reminders and report generation moved onto BullMQ queues backed by Redis so request latency stays flat under load.
`Nest.js` `Prisma` `PostgreSQL` `Redis` `BullMQ` `TypeScript`

**[Future PropTech Miami](https://futureproptechmiami.com)** — *SaaS web platform*
25+ page Next.js platform with Stripe checkout, SendGrid transactional email, and a QR credential system with scan-based check-in that replaced a fully manual process.
`Next.js` `Nest.js` `PostgreSQL` `Stripe` `SendGrid`

**[GCC Summit Bengaluru](https://bengalurugccsummit.com)** — *full stack platform*
Serves 500+ registered users across 200+ organisations. WhatsApp Business API and LinkedIn lead capture wired into a CRM pipeline that automated follow-up end to end.
`Next.js` `Nest.js` `WhatsApp Business API` `LinkedIn API`

**[Maxpo Exhibitions](https://maxpoexhibitions.com)** — *corporate website*
The company's own site and event directory, pulling live data from the shared CMS so marketing can publish a new event without a deploy.
`Next.js` `TypeScript` `CMS` `SEO`

**Le Bloom Partner Portal** — *booking platform, Maison D'Auraine*
Partner-facing booking portal with slot management, tiered admin dashboards and role-based access on a GraphQL API. Cut database query time by 40% with Redis caching.
`Next.js` `Nest.js` `GraphQL` `Prisma` `Redis`

**[Glamourbook](https://www.glamourbook.com)** — *e-commerce storefront, Maison D'Auraine*
React storefront built on a reusable component set, tuned for rendering performance and cross-device behaviour.
`React.js` `Node.js` `MongoDB`

### Also shipped

| Project | Type | Stack |
| --- | --- | --- |
| [Future PropTech Summit](https://www.futureproptechsummit.com) | Dubai | Next.js · Nest.js · PostgreSQL |
| [Future PropTech Singapore](https://futureproptechsingapore.com) | Singapore | Next.js · CMS · Stripe |
| [GCC Summit Hyderabad](https://hyderabadgccsummit.com) | Hyderabad | Next.js · Nest.js · REST |
| [Future BioTech Expo](https://futurebiotechexpo.com) | Life sciences | Next.js · Stripe · SendGrid |
| [Revolution EV Asia](https://www.revolutionevasia.com) | Electric mobility | Next.js · CMS · Analytics |
| [India Property Show](https://indiapropertyshow.in) | Multi-city series | Next.js · CMS · Lead capture |
| Bengaluru Property Show | Regional edition | Next.js · CMS |
| [Mzee Shoes](https://github.com/machumzd/MZEE-Shoes) | E-commerce (Brototype) | Node.js · Express · MongoDB |

---

## Experience

**Senior Developer** — Maxpo Exhibitions · *Jun 2025 – Present*
Lead end-to-end development of production web platforms from a shared multi-tenant codebase. Architected the internal CMS, CRM and HRMS suite. Own coding standards, code review and release timelines, and mentor junior developers.

**MERN Full Stack Developer** — Maison D'Auraine · *Jun 2023 – May 2025*
Rebuilt booking flows in React.js and Next.js. Built backend APIs with Nest.js, Prisma and GraphQL, cutting query time by 40% with Redis caching. Resolved 30+ critical production bugs and delivered releases 15% faster than previous sprints.

**MERN Stack Developer Trainee** — Brototype · *Dec 2022 – May 2023*
Six-month intensive full stack program built around real, project-based work.

**Education** — Diploma in Computer Engineering, Govt Polytechnic College Kasargod, Kerala · 2019–2022 · CGPA 8.64

**Languages** — English (fluent), Malayalam (native), Hindi (conversational), Tamil (spoken), Arabic (read & write)

---

## Get in touch

Open to senior frontend and full stack roles.

- **Email** — [machumzdofcl@gmail.com](mailto:machumzdofcl@gmail.com)
- **LinkedIn** — [in/abdul-mazood](https://www.linkedin.com/in/abdul-mazood)
- **WhatsApp** — [message me](https://wa.me/917994299413)
- **Portfolio** — [abdulmazood.netlify.app](https://abdulmazood.netlify.app)

---

<details>
<summary><strong>About this repository</strong></summary>

<br>

The source of the portfolio site itself.

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16, App Router | Static export — ships as plain files, no server to run. |
| Language | TypeScript (strict) | Content is typed, so a malformed entry fails the build, not the page. |
| Styling | Plain CSS custom properties | One design system in `app/globals.css`. No utility framework, no runtime CSS-in-JS. |
| Fonts | Self-hosted, subset, preloaded | No third-party request on page load; only the Latin subsets ship. |
| SEO | Schema.org graph, sitemap, OG image | `WebSite` → `ProfilePage` → `Person` → `ItemList` of all work. |

```
app/         layout (metadata, JSON-LD), page composition, design system
components/  header, contact form, icons
lib/         content.ts — every piece of copy on the site
public/      fonts, icons, images
docs/        Apps Script handler for the contact form
```

All copy lives in **`lib/content.ts`**. Adding a project or updating a role means editing that one file.

```bash
npm install
npm run dev        # localhost:3000
npm run build      # static export to ./out
npm run typecheck
```

Deployed on Netlify — build `npm run build`, publish `out`. Licensed MIT.

</details>
