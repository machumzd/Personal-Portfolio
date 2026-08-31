import type { Metadata, Viewport } from "next";
import {
  alsoShipped,
  education,
  headline,
  languages,
  person,
  projects,
  stack,
} from "@/lib/content";

// Fonts are self-hosted via Fontsource: no request to Google at build or run
// time, deterministic CI builds, and nothing leaks a visitor's IP to a third party.
import "./globals.css";

// Kept under ~155 characters so search results show it without truncation.
const description =
  "Senior full stack developer in Bengaluru building scalable SaaS platforms with Next.js, NestJS, TypeScript and GraphQL. 3.9+ years, 14 projects shipped.";

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title: {
    default: `${person.name} - ${person.role}`,
    template: `%s - ${person.name}`,
  },
  description,
  keywords: [
    "Abdul Mazood",
    "Senior Full Stack Developer",
    "Full Stack Developer Bengaluru",
    "React.js Developer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "GraphQL",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "SaaS platform developer",
  ],
  authors: [{ name: person.name, url: person.site }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: person.site,
    siteName: `${person.name} - Portfolio`,
    title: `${person.name} - ${person.role}`,
    description,
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${person.name}, ${person.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} - ${person.role}`,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  manifest: "/favIcons/site.webmanifest",
  icons: {
    icon: [
      { url: "/favIcons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favIcons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favIcons/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favIcons/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d2309",
  width: "device-width",
  initialScale: 1,
};

const SITE = person.site;

/**
 * One linked graph rather than a lone Person node: search engines can then
 * connect the page, the site, the person and the body of work to each other.
 */
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: `${person.name} - Portfolio`,
      inLanguage: "en",
      publisher: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profile`,
      url: `${SITE}/`,
      name: `${person.name} - ${person.role}`,
      isPartOf: { "@id": `${SITE}/#website` },
      about: { "@id": `${SITE}/#person` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE}/abdul-mazood.jpg`,
        caption: person.name,
      },
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: person.name,
      jobTitle: person.role,
      description: headline,
      email: `mailto:${person.email}`,
      telephone: person.phone,
      url: `${SITE}/`,
      image: `${SITE}/abdul-mazood.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      sameAs: [person.linkedin, person.github],
      worksFor: {
        "@type": "Organization",
        name: "Maxpo Exhibitions",
        url: "https://maxpoexhibitions.com",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.institution,
        address: education.location,
      },
      knowsLanguage: languages.map((l) => ({
        "@type": "Language",
        name: l.name,
      })),
      knowsAbout: stack.flatMap((g) => g.items),
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Full Stack Developer",
        occupationLocation: { "@type": "City", name: "Bengaluru" },
        skills: stack.flatMap((g) => g.items).join(", "),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE}/#work`,
      name: "Selected work",
      numberOfItems: projects.length + alsoShipped.length,
      itemListElement: [
        ...projects.map((p) => ({
          name: p.title,
          description: p.blurb,
          keywords: p.stack.join(", "),
          href: p.href,
        })),
        ...alsoShipped.map((e) => ({
          name: e.title,
          description: e.detail,
          keywords: e.stack.replace(/ · /g, ", "),
          href: e.href,
        })),
      ].map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.name,
          description: p.description,
          keywords: p.keywords,
          creator: { "@id": `${SITE}/#person` },
          ...(p.href ? { url: p.href } : {}),
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Next emits no font preload for CSS-declared faces, and the LCP text
            is set in this one, so fetch it alongside the stylesheet. */}
        <link
          rel="preload"
          href="/fonts/jakarta-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <meta name="google-site-verification" content="Mo91zYgpuNKQSJPy2MyU1U7gXHiSNBni9noKHsMJ4UQ" />
      </head>
      <body>{children}</body>
    </html>
  );
}
