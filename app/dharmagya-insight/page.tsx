import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dharmagya Insight | Daily Panchang, Rashifal and Spiritual Guidance",
  description:
    "Explore daily panchang, rashifal, muhurat tools, kundli guidance, and spiritual insights from Dharmagya.",
};

const panchangItems = [
  { label: "Tithi", value: "Shukla Paksha Tritiya", icon: "moon" },
  { label: "Nakshatra", value: "Rohini", icon: "star" },
  { label: "Yoga", value: "Brahma", icon: "spark" },
  { label: "Rahu Kaal", value: "02:17 PM - 03:46 PM", icon: "clock" },
  { label: "Sunrise", value: "05:48 AM", icon: "sunrise" },
  { label: "Sunset", value: "07:12 PM", icon: "sunset" },
];

const tools = [
  { title: "Muhurat Finder", icon: "target", href: "#" },
  { title: "Puja Recommendation", icon: "people", href: "#" },
  { title: "Kundli", icon: "chart", href: "#" },
  { title: "Ask Dharmagya", icon: "bell", href: "/astrology/chat-with-astrologer" },
];

const articles = [
  {
    title: "Understanding Rahu Kaal before planning important work",
    category: "Panchang",
    readTime: "4 min read",
  },
  {
    title: "Simple morning rituals for focus, gratitude, and calm",
    category: "Spirituality",
    readTime: "3 min read",
  },
  {
    title: "How nakshatra energy shapes daily decisions",
    category: "Astrology",
    readTime: "5 min read",
  },
];

function InsightIcon({ icon }: { icon: string }) {
  const common = "h-5 w-5";

  if (icon === "moon") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M18.2 15.3A7.4 7.4 0 0 1 8.7 5.8 7.5 7.5 0 1 0 18.2 15.3Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (icon === "star") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m12 3.5 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2L4.5 9l5.2-.8z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (icon === "spark") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5c1.1 3.1 2.9 5 6 6-3.1 1-4.9 2.9-6 6-1.1-3.1-2.9-5-6-6 3.1-1 4.9-2.9 6-6Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path d="M18 15v3M6 17v2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (icon === "clock") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7.5V12l3 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (icon === "sunrise" || icon === "sunset") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 18h16M7 15a5 5 0 0 1 10 0" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        <path
          d={icon === "sunrise" ? "M12 4v7M9 7l3-3 3 3" : "M12 4v7M9 8l3 3 3-3"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (icon === "target") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="1.3" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "people") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 19c.7-3.4 2.5-5.1 5.5-5.1s4.8 1.7 5.5 5.1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
        <path d="M15.2 11.3a2.5 2.5 0 1 0 0-5M16.3 14.4c2 .5 3.3 2 3.7 4.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (icon === "chart") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
        <path d="M12 5.5c1.9 2 4 4.5 6 6.5-2 2-4.1 4.5-6 6.5-1.9-2-4-4.5-6-6.5 2-2 4.1-4.5 6-6.5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 20h10M8 17.5h8M9 15h6M12 4.5c2.6 2 4 4 4 6.2 0 2.4-1.8 4.3-4 4.3s-4-1.9-4-4.3c0-2.2 1.4-4.2 4-6.2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function AriesMark() {
  return (
    <svg className="h-16 w-16" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="31" fill="#fff4e7" stroke="#a94f24" strokeWidth="2" />
      <circle cx="40" cy="40" r="24" stroke="#a94f24" strokeDasharray="3 4" strokeWidth="1.5" />
      <path
        d="M25 48c.7-14 5.1-22 12.6-22 3.2 0 5 2.2 5 5.7V54M55 48c-.7-14-5.1-22-12.6-22-3.2 0-5 2.2-5 5.7V54"
        stroke="#8b2f19"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.5"
      />
      <path d="M29 56h22" stroke="#a94f24" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function ScriptureIllustration() {
  return (
    <svg className="h-full w-full" viewBox="0 0 520 240" fill="none" aria-hidden="true">
      <path d="M130 46 404 19l42 142-282 35z" fill="#f1d69f" />
      <path d="M147 61 386 38l31 107-245 31z" fill="#fff0ca" />
      <path d="M173 83 335 68M179 105l181-17M184 126l120-12M190 148l170-17" stroke="#b67a3d" strokeLinecap="round" strokeWidth="5" opacity=".48" />
      <path d="M328 44c23 41 45 80 66 118" stroke="#874313" strokeLinecap="round" strokeWidth="9" />
      <path d="m393 160 24 27-35 7z" fill="#5a2c14" />
      <path d="m316 24 24 18-15 10-24-18z" fill="#d89a42" />
      <path d="M410 43c41 2 70 20 86 56-16 4-30 3-43-4 10 15 14 29 12 44-18-4-31-14-39-29 1 17-4 32-17 45-17-48-17-85 1-112Z" fill="#a95b20" />
      <path d="M416 50c7 43 5 83-8 120" stroke="#6f3516" strokeLinecap="round" strokeWidth="5" />
      <path d="M432 68c16 6 31 15 45 27M429 91c13 13 25 26 34 43M424 116c8 14 12 28 13 44" stroke="#6f3516" strokeLinecap="round" strokeWidth="4" opacity=".65" />
      <path d="M56 196c83 22 172 28 267 16 44-6 87-16 129-30" stroke="#d3a569" strokeLinecap="round" strokeWidth="8" opacity=".28" />
    </svg>
  );
}

export default function DharmagyaInsightPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 lg:py-8">
        <nav className="mb-5 text-xs font-semibold text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-border">/</span>
          <span>Dharmagya Insight</span>
        </nav>

        <section className="text-center">
          <h1 className="font-serif text-3xl font-extrabold tracking-tight text-primary-deep sm:text-4xl">
            Dharmagya Insight
          </h1>
          <p className="mt-2 text-sm font-semibold text-muted">
            Your daily guide to dharma, muhurat and spiritual knowledge.
          </p>
        </section>

        <section className="mt-7 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.86fr)]">
          <article className="rounded-lg border border-border bg-surface p-4 shadow-sm sm:p-5">
            <div className="mb-4">
              <h2 className="text-sm font-extrabold text-primary-deep">Today&apos;s Panchang</h2>
              <p className="mt-1 text-xs font-semibold text-muted">27 May 2026, Tuesday</p>
            </div>
            <div className="grid gap-3">
              {panchangItems.map((item) => (
                <div key={item.label} className="grid grid-cols-[1.1rem_7rem_minmax(0,1fr)] items-center gap-3 text-xs sm:grid-cols-[1.1rem_8rem_minmax(0,1fr)]">
                  <span className="text-[#d97706]">
                    <InsightIcon icon={item.icon} />
                  </span>
                  <span className="font-extrabold text-primary-deep">{item.label}</span>
                  <span className="min-w-0 font-semibold text-muted">{item.value}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-border bg-surface p-4 shadow-sm sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-sm font-extrabold text-primary-deep">Rashifal (Today)</h2>
              </div>
              <select
                className="h-9 rounded-md border border-border bg-secondary-soft px-3 text-xs font-extrabold text-primary-deep outline-none transition focus:border-primary"
                defaultValue="Aries"
                aria-label="Select zodiac sign"
              >
                <option>Aries</option>
                <option>Taurus</option>
                <option>Gemini</option>
                <option>Cancer</option>
                <option>Leo</option>
                <option>Virgo</option>
                <option>Libra</option>
                <option>Scorpio</option>
                <option>Sagittarius</option>
                <option>Capricorn</option>
                <option>Aquarius</option>
                <option>Pisces</option>
              </select>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-center">
              <div className="flex justify-center sm:justify-start">
                <AriesMark />
              </div>
              <div>
                <p className="text-sm font-extrabold text-primary-deep">Aries</p>
                <p className="mt-2 text-xs font-semibold leading-5 text-muted">
                  Today is a good day for new beginnings. You may receive good news in your career.
                </p>
                <Link href="#" className="mt-4 inline-flex text-xs font-extrabold text-[#d97706] transition hover:text-primary">
                  Read Full Rashifal
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section className="mt-7">
          <h2 className="text-sm font-extrabold text-primary-deep">Quick Tools</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                href={tool.href}
                className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-surface px-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="grid h-11 w-11 place-items-center rounded-md bg-[#fff4e7] text-[#d97706] ring-1 ring-[#f5c879] transition group-hover:bg-primary group-hover:text-white">
                  <InsightIcon icon={tool.icon} />
                </span>
                <span className="text-xs font-extrabold leading-4 text-primary-deep">{tool.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-7 overflow-hidden rounded-lg border border-border bg-[#fff7e8] shadow-sm">
          <div className="relative min-h-56 px-5 py-5 sm:px-7">
            <div className="relative z-10 max-w-xl">
              <h2 className="text-sm font-extrabold text-primary-deep">Today&apos;s Insight</h2>
              <blockquote className="mt-5 text-base font-semibold leading-7 text-primary-deep sm:text-lg">
                &quot;The mind is everything. What you think you become.&quot;
              </blockquote>
              <p className="mt-4 text-sm font-extrabold text-muted">- Buddha</p>
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-[22rem] max-w-[75%] opacity-95 sm:h-56 sm:w-[32rem]">
              <ScriptureIllustration />
            </div>
          </div>
        </section>

        <section className="mt-7">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-sm font-extrabold text-primary-deep">Wisdom Library</h2>
            <Link href="#" className="text-xs font-extrabold text-primary transition hover:text-primary-hover">
              View All
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="rounded-lg border border-border bg-surface p-4 shadow-sm transition hover:border-primary hover:shadow-md">
                <p className="text-[11px] font-extrabold uppercase text-[#d97706]">{article.category}</p>
                <h3 className="mt-2 text-sm font-extrabold leading-5 text-primary-deep">{article.title}</h3>
                <p className="mt-4 text-xs font-semibold text-muted">{article.readTime}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
