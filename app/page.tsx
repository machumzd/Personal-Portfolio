import SiteHeader from "@/components/SiteHeader";
import ContactForm from "@/components/ContactForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  about,
  alsoShipped,
  coreTech,
  education,
  headline,
  languages,
  lede,
  person,
  projects,
  roles,
  stack,
  stats,
} from "@/lib/content";

const Arrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const [feature, ...rest] = projects;

export default function Home() {
  return (
    <div className="frame">
      <a className="skip" href="#stack">
        Skip to skills
      </a>

      <div className="canvas" id="top">
        <SiteHeader />

        {/* ---------- hero ---------- */}
        <section className="hero">
          <p className="hero__pill rise rise-1">
            <span className="pill">{person.role}</span>
          </p>

          <h1 className="h-display hero__title rise rise-2">{headline}</h1>

          <p className="lede hero__lede rise rise-3">{lede}</p>

          <ul className="core rise rise-3">
            {coreTech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          <div className="hero__actions rise rise-4">
            <a className="btn btn--solid" href="#work">
              See the work
            </a>
            <a className="btn" href={`mailto:${person.email}`}>
              Email me
            </a>
            <a
              className="btn"
              href={person.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>

          <dl className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <dt className="stat__value">{s.value}</dt>
                <dd className="stat__label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- about ---------- */}
        <section className="split" id="about">
          <div className="split__art">
            <figure className="portrait">
              <img
                src="/abdul-mazood.jpg"
                alt="Abdul Mazood"
                width={900}
                height={798}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="split__body">
            <span className="pill">Who I am</span>
            <h2 className="h-section split__title">{about.title}</h2>

            <div className="two-col">
              <div>
                <h3>{about.lead}</h3>
                <p>{about.leadBody}</p>
              </div>

              <dl>
                {about.columns.map((c) => (
                  <div key={c.term}>
                    <dt>{c.term}</dt>
                    <dd>{c.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------- skills ---------- */}
        <section className="section" id="stack">
          <div className="section__head">
            <span className="pill">Skills</span>
            <h2 className="h-section">The stack I build with.</h2>
            <p className="lede">
              Strongest in the TypeScript end-to-end path: Next.js on the front,
              Nest.js and GraphQL behind it, PostgreSQL underneath.
            </p>
          </div>

          <div className="stack-list">
            {stack.map((group) => (
              <div className="stack-row" key={group.label}>
                <p className="stack-row__label">{group.label}</p>
                <ul className="chips">
                  {group.items.map((i) => (
                    <li className="chip" key={i}>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- work ---------- */}
        <section className="section section--panel" id="work">
          <div className="section__head">
            <span className="pill">Selected work</span>
            <h2 className="h-section">
              Production platforms, built end to end.
            </h2>
            <p className="lede">
              Architecture, frontend, API layer, database and integrations -
              these are projects I owned rather than contributed to.
            </p>
          </div>

          <div className="work-grid">
            {/* the deepest engineering piece leads, at full width */}
            <article className="card card--feature">
              <div className="card__top">
                <span className="pill pill--forest">{feature.kind}</span>
                <span className="card__note">{feature.context}</span>
              </div>

              <div className="card__body">
                <div>
                  <h3 className="card__title">{feature.title}</h3>
                  <p className="card__blurb" style={{ marginTop: "0.6rem" }}>
                    {feature.blurb}
                  </p>
                  <p className="card__stat">{feature.highlight}</p>
                </div>

                <ul className="card__points">
                  {feature.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              <div className="card__foot">
                <ul className="chips">
                  {feature.stack.map((t) => (
                    <li className="chip" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
                {feature.href ? (
                  <a
                    className="card__link"
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {feature.hrefLabel}
                    <Arrow />
                  </a>
                ) : (
                  <span className="card__note">
                    {feature.note ??
                      "Internal platform · not publicly accessible"}
                  </span>
                )}
              </div>
            </article>

            {rest.map((p) => (
              <article className="card card--sm" key={p.slug}>
                <div className="card__top">
                  <span className="pill">{p.kind}</span>
                  <span className="card__note">{p.context}</span>
                </div>

                <h3 className="card__title">{p.title}</h3>
                <p className="card__blurb">{p.blurb}</p>
                <p className="card__stat">{p.highlight}</p>

                <ul className="card__points">
                  {p.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className="card__foot">
                  <ul className="chips">
                    {p.stack.map((t) => (
                      <li className="chip" key={t}>
                        {t}
                      </li>
                    ))}
                  </ul>
                  {p.href ? (
                    <a
                      className="card__link"
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.hrefLabel}
                      <Arrow />
                    </a>
                  ) : (
                    <span className="card__note">
                      {p.note ?? "Internal platform"}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="index">
            <div className="index__head">
              <span className="pill pill--outline">Also shipped</span>
              <p className="index__note">
                More shipped work - Maxpo platform editions, plus earlier
                standalone builds.
              </p>
            </div>

            <ul className="index__list">
              {alsoShipped.map((e) => {
                const Row = (
                  <>
                    <span className="index__title">{e.title}</span>
                    <span className="index__kind">{e.kind}</span>
                    <span className="index__detail">{e.detail}</span>
                    <span className="index__stack">{e.stack}</span>
                    <span className="index__go">
                      {e.href ? <Arrow /> : <em>{e.note}</em>}
                    </span>
                  </>
                );

                return (
                  <li key={e.title}>
                    {e.href ? (
                      <a
                        className="index__row index__row--link"
                        href={e.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {Row}
                      </a>
                    ) : (
                      <div className="index__row">{Row}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ---------- experience ---------- */}
        <section className="section" id="experience">
          <div className="section__head">
            <span className="pill">Experience</span>
            <h2 className="h-section">3.9+ years, three teams.</h2>
          </div>

          <div className="roles">
            {roles.map((role) => (
              <article className="role" key={`${role.company}-${role.period}`}>
                <div className="role__meta">
                  <span className="role__period">{role.period}</span>
                  {role.current && <span className="pill">Current</span>}
                </div>

                <div>
                  <h3 className="role__title">{role.title}</h3>
                  <p className="role__co">
                    {role.company} · {role.location}
                  </p>

                  <ul className="role__points" style={{ marginTop: "1rem" }}>
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="edu">
            <div>
              <p
                className="pill pill--outline"
                style={{ marginBottom: "0.6rem" }}
              >
                Education
              </p>
              <h3 className="edu__q">{education.qualification}</h3>
              <p className="edu__meta" style={{ marginTop: "0.35rem" }}>
                {education.institution}, {education.location} ·{" "}
                {education.period} · {education.result}
              </p>
            </div>

            <div>
              <p
                className="pill pill--outline"
                style={{ marginBottom: "0.6rem" }}
              >
                Languages
              </p>
              <p className="edu__meta">
                {languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
              </p>
            </div>
          </div>
        </section>

        {/* ---------- contact ---------- */}
        <section className="contact" id="contact">
          <div className="contact__grid">
            <div>
              <span className="pill">Contact</span>
              <h2 className="h-section contact__title">
                Let&rsquo;s build something.
              </h2>
              <p className="contact__lede">
                Open to senior frontend and full stack roles. Fastest reply is
                by email or WhatsApp.
              </p>

              <div className="contact__list">
                <p className="contact__row">
                  <span className="contact__key">Email</span>
                  <a className="contact__val" href={`mailto:${person.email}`}>
                    {person.email}
                  </a>
                </p>
                <p className="contact__row">
                  <span className="contact__key">Phone</span>
                  <a className="contact__val" href={person.phoneHref}>
                    {person.phone}
                  </a>
                </p>
                <p className="contact__row">
                  <span className="contact__key">LinkedIn</span>
                  <a
                    className="contact__val"
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    in/abdul-mazood
                  </a>
                </p>
                <p className="contact__row">
                  <span className="contact__key">GitHub</span>
                  <a
                    className="contact__val"
                    href={person.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    machumzd
                  </a>
                </p>
                <p className="contact__row">
                  <span className="contact__key">Location</span>
                  <span>{person.location}</span>
                </p>
              </div>

              <div className="contact__actions">
                <a
                  className="btn btn--mint"
                  href={person.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </div>

      <footer className="foot">
        <p>
          © {new Date().getFullYear()} {person.name} · {person.role}
        </p>
        <nav className="foot__links" aria-label="Elsewhere">
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={person.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={person.whatsapp} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={13} />
            WhatsApp
          </a>
          <a href={`mailto:${person.email}`}>Email</a>
        </nav>
      </footer>
    </div>
  );
}
