/**
 * Single source of truth for site content.
 * Positioning follows the LinkedIn headline: senior full stack developer
 * building scalable SaaS platforms. The events are the domain the work
 * happened in, not the pitch.
 */

export const person = {
  name: "Abdul Mazood",
  initials: "AM",
  role: "Senior Full Stack Developer",
  location: "Bengaluru, Karnataka, India",
  email: "machumzdofcl@gmail.com",
  phone: "+91 79942 99413",
  phoneHref: "tel:+917994299413",
  whatsapp:
    "https://wa.me/917994299413?text=Hi%20Abdul%2C%20I%20saw%20your%20portfolio",
  site: "https://abdulmazood.netlify.app",
  linkedin: "https://www.linkedin.com/in/abdul-mazood",
  github: "https://github.com/machumzd",
  available: true,
  availableFor: "Senior frontend & full stack roles",
} as const;

export const headline =
  "Senior full stack developer building scalable SaaS platforms.";

export const lede =
  "I design, build and ship production web applications end to end - React.js and Next.js on the front, Nest.js, Node.js, GraphQL and PostgreSQL behind them.";

/** Headline numbers, all traceable to real work. */
export const stats = [
  { value: "3.9+", label: "Years experience" },
  { value: "14", label: "Projects shipped" },
  { value: "9", label: "Platforms, one codebase" },
  { value: "40%", label: "Faster DB queries" },
] as const;

/** The four technologies the LinkedIn headline leads with. */
export const coreTech = ["Next.js", "NestJS", "TypeScript", "GraphQL"] as const;

export const about = {
  title: "Full stack, with a frontend bias.",
  lead: "I own features end to end.",
  leadBody:
    "From component architecture and state management through API design, database schema, integrations and deployment. I have shipped as the only developer on a project and as the senior on a team.",
  columns: [
    {
      term: "Frontend",
      detail:
        "React.js, Next.js, TypeScript and Redux. Component architecture, rendering performance, accessibility and SEO where organic traffic is the commercial channel.",
    },
    {
      term: "Backend & data",
      detail:
        "Nest.js, Node.js, Express and GraphQL over PostgreSQL, MongoDB and Prisma, with Redis caching and BullMQ queues for the work that should not block a request.",
    },
  ],
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  context: string;
  blurb: string;
  highlight: string;
  points: string[];
  stack: string[];
  href?: string;
  hrefLabel?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "maxpo-platform",
    title: "Multi-tenant CMS, CRM & HRMS",
    kind: "Internal SaaS platform",
    context: "Maxpo Exhibitions",
    blurb:
      "The platform every event site below is built on - one codebase serving nine tenant sites, with role-scoped access, audit trails and background job processing.",
    highlight: "9 tenant sites · 1 admin",
    points: [
      "Architected a multi-tenant CMS driving content, listings and page sections across nine sites from a single admin, replacing per-site developer work.",
      "Built the CRM with lead capture, ownership assignment, automated follow-up reminders and UTM source attribution, replacing spreadsheet tracking.",
      "Implemented role-based access control and audit trails so sales, marketing and operations share one system with scoped permissions.",
      "Moved email, reminders and report generation onto BullMQ queues backed by Redis, keeping request latency flat under load.",
      "Added an HRMS module for internal staff records, attendance and approvals.",
    ],
    stack: [
      "Nest.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "TypeScript",
      "RBAC",
    ],
  },
  {
    slug: "future-proptech-miami",
    title: "Future PropTech Miami",
    kind: "SaaS web platform",
    context: "Maxpo Exhibitions",
    blurb:
      "A 25+ page Next.js platform with Stripe checkout, transactional email and a QR-based credential system used live at the door.",
    highlight: "25+ pages · Stripe · QR credentials",
    points: [
      "Built the server-rendered Next.js frontend with CMS-driven content modules, schema markup and sitemap generation for organic visibility.",
      "Integrated Stripe for one-off and tiered purchases, plus SendGrid for transactional and bulk campaign email.",
      "Delivered a QR credential generator with scan-based check-in, replacing an entirely manual paper process.",
    ],
    stack: ["Next.js", "Nest.js", "PostgreSQL", "Stripe", "SendGrid"],
    href: "https://futureproptechmiami.com",
    hrefLabel: "futureproptechmiami.com",
  },
  {
    slug: "gcc-summit-bengaluru",
    title: "GCC Summit Bengaluru",
    kind: "Full stack platform",
    context: "Maxpo Exhibitions",
    blurb:
      "Integration-heavy build: WhatsApp Business API and LinkedIn lead capture wired into an automated CRM follow-up pipeline.",
    highlight: "500+ users · 200+ organisations",
    points: [
      "Developed the full stack application serving 500+ registered users across 200+ organisations.",
      "Integrated WhatsApp Business API and LinkedIn lead capture, feeding a CRM pipeline that automated follow-up end to end.",
      "Built the credential generator and check-in flow used live by the on-site operations team.",
    ],
    stack: [
      "Next.js",
      "Nest.js",
      "WhatsApp Business API",
      "LinkedIn API",
      "REST",
    ],
    href: "https://bengalurugccsummit.com",
    hrefLabel: "bengalurugccsummit.com",
  },
  {
    slug: "maxpo-corporate",
    title: "Maxpo Exhibitions",
    kind: "Corporate website",
    context: "Maxpo Exhibitions",
    blurb:
      "The company's own site: a directory of every event across nine industries and 25+ countries, driven from the same CMS.",
    highlight: "150+ editions catalogued",
    points: [
      "Built the corporate site and event directory, pulling live event data from the shared CMS rather than duplicating content.",
      "Structured the portfolio, industries and past-edition archives so marketing can publish a new event without a deploy.",
      "Handled SEO structure and performance for the company's primary inbound channel.",
    ],
    stack: ["Next.js", "TypeScript", "CMS", "SEO"],
    href: "https://maxpoexhibitions.com",
    hrefLabel: "maxpoexhibitions.com",
  },
  {
    slug: "lebloom-partner",
    title: "Le Bloom Partner Portal",
    kind: "Booking platform",
    context: "Maison D'Auraine",
    blurb:
      "Partner-facing booking portal with slot management, tiered admin dashboards and role-based access, on a GraphQL API.",
    highlight: "40% faster queries via Redis",
    points: [
      "Rebuilt the booking flow in React.js and Next.js, cutting page load times and simplifying the journey to a confirmed slot.",
      "Shipped slot booking, admin and super-admin dashboards, and the role-based access control layer beneath them.",
      "Built the backend APIs with Nest.js, Prisma and GraphQL, cutting database query time by 40% with Redis caching.",
    ],
    stack: ["Next.js", "Nest.js", "GraphQL", "Prisma", "Redis"],
    note: "No longer publicly hosted",
  },
  {
    slug: "glamourbook",
    title: "Glamourbook",
    kind: "E-commerce storefront",
    context: "Maison D'Auraine",
    blurb:
      "React storefront built on a reusable component set, tuned for rendering performance and cross-device behaviour.",
    highlight: "Reusable component library",
    points: [
      "Engineered dynamic landing pages, banners and product sections with a responsive React.js UI.",
      "Built the reusable product and banner component set used across the whole storefront.",
      "Focused on rendering performance, SEO fundamentals and cross-device consistency.",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "REST"],
    href: "https://www.glamourbook.com",
    hrefLabel: "glamourbook.com",
  },
];

/** Everything else shipped, indexed rather than expanded. */
export type IndexEntry = {
  title: string;
  kind: string;
  detail: string;
  stack: string;
  href?: string;
  hrefLabel?: string;
  note?: string;
};

export const alsoShipped: IndexEntry[] = [
  {
    title: "Future PropTech Summit",
    kind: "Dubai",
    detail:
      "25+ page SEO platform with CRM, credential issuing and UTM campaign attribution.",
    stack: "Next.js · Nest.js · PostgreSQL",
    href: "https://www.futureproptechsummit.com",
    hrefLabel: "futureproptechsummit.com",
  },
  {
    title: "Future PropTech Singapore",
    kind: "Singapore",
    detail:
      "Fourth edition of the PropTech series, launched from the shared platform.",
    stack: "Next.js · CMS · Stripe",
    href: "https://futureproptechsingapore.com",
    hrefLabel: "futureproptechsingapore.com",
  },
  {
    title: "GCC Summit Hyderabad",
    kind: "Hyderabad",
    detail:
      "Second GCC edition, reusing the registration, CRM and credential modules.",
    stack: "Next.js · Nest.js · REST",
    href: "https://hyderabadgccsummit.com",
    hrefLabel: "hyderabadgccsummit.com",
  },
  {
    title: "Future BioTech Expo",
    kind: "Life sciences",
    detail:
      "CMS-driven site handed fully to marketing, with Stripe checkout and SendGrid campaigns.",
    stack: "Next.js · Stripe · SendGrid",
    href: "https://futurebiotechexpo.com",
    hrefLabel: "futurebiotechexpo.com",
  },
  {
    title: "Revolution EV Asia",
    kind: "Electric mobility",
    detail:
      "Responsive multi-page platform with SEO sitemap and UTM campaign tracking.",
    stack: "Next.js · CMS · Analytics",
    href: "https://www.revolutionevasia.com",
    hrefLabel: "revolutionevasia.com",
  },
  {
    title: "India Property Show",
    kind: "Multi-city series",
    detail:
      "Property expo platform running editions across Dubai, Bahrain and the USA.",
    stack: "Next.js · CMS · Lead capture",
    href: "https://indiapropertyshow.in",
    hrefLabel: "indiapropertyshow.in",
  },
  {
    title: "Bengaluru Plot Expo",
    kind: "Bengaluru",
    detail:
      "Regional property expo edition built on the same multi-tenant foundation.",
    stack: "Next.js · CMS · Lead capture · QR credentials",
    href: "https://plotexpo.in",
    hrefLabel: "plotexpo.in",
  },
  {
    title: "Mzee Shoes",
    kind: "Brototype",
    detail:
      "Standalone MVC e-commerce application built during training: users, products, categories, coupons and payments.",
    stack: "Node.js · Express · MongoDB",
    href: "https://github.com/machumzd/MZEE-Shoes",
    hrefLabel: "github.com/machumzd/MZEE-Shoes",
  },
];

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const roles: Role[] = [
  {
    title: "Senior Developer",
    company: "Maxpo Exhibitions",
    location: "Bengaluru, India",
    period: "Jun 2025 - Present",
    current: true,
    points: [
      "Lead end-to-end development of 5+ production web platforms from a shared multi-tenant codebase, taking each from brief to live in two to three weeks.",
      "Architected the internal CMS, CRM and HRMS suite, with role-based access control, background job processing and campaign attribution.",
      "Integrated Stripe payments, WhatsApp Business API, LinkedIn API, SendGrid and OpenAI APIs across the product surface.",
      "Own coding standards, code review and release timelines across concurrent projects, and mentor junior developers.",
    ],
  },
  {
    title: "MERN Full Stack Developer",
    company: "Maison D'Auraine",
    location: "Bengaluru, India",
    period: "Jun 2023 - May 2025",
    points: [
      "Rebuilt booking flows in React.js and Next.js, cutting page load times and simplifying the user journey.",
      "Shipped slot booking, admin and super-admin dashboards, and role-based access control modules.",
      "Built scalable backend APIs with Nest.js, Prisma and GraphQL; cut database query time by 40% with Redis caching.",
      "Resolved 30+ critical production bugs under tight deadlines and delivered releases 15% faster than previous sprints.",
    ],
  },
  {
    title: "MERN Stack Developer Trainee",
    company: "Brototype",
    location: "Bengaluru, India",
    period: "Dec 2022 - May 2023",
    points: [
      "Completed a six-month intensive full stack program built around real, project-based work.",
      "Built multiple end-to-end web applications using React.js, Node.js, MongoDB and REST APIs.",
      "Worked in an agile team on feature development, debugging, code review and deployment workflows.",
    ],
  },
];

export const stack: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "MUI",
      "Sass",
      "Responsive UI",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "Socket.io",
      "Microservices",
    ],
  },
  {
    label: "Databases & ORM",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis", "BullMQ"],
  },
  {
    label: "DevOps & tools",
    items: [
      "Docker",
      "AWS",
      "CI/CD",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Supabase",
      "Postman",
      "Figma",
    ],
  },
  {
    label: "Integrations",
    items: [
      "Stripe",
      "WhatsApp Business API",
      "LinkedIn API",
      "OpenAI APIs",
      "SendGrid",
      "Google Analytics & UTM",
    ],
  },
  {
    label: "Practices",
    items: [
      "JWT & RBAC",
      "Agile / Scrum",
      "Jest",
      "Code review",
      "SEO",
      "Performance tuning",
    ],
  },
];

export const education = {
  qualification: "Diploma in Computer Engineering",
  institution: "Govt Polytechnic College Kasargod",
  location: "Kerala, India",
  period: "Jun 2019 - Aug 2022",
  result: "CGPA 8.64",
};

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Malayalam", level: "Native" },
  { name: "Hindi", level: "Conversational" },
  { name: "Tamil", level: "Spoken" },
  { name: "Arabic", level: "Read & write" },
];

export const nav = [
  { href: "#stack", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
