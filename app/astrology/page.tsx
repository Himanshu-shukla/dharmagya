import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Astrology Services | Dharmagya",
  description:
    "Chat or call experienced astrologers for kundli, horoscope, matchmaking, vastu, numerology, and spiritual guidance.",
};

const services = [
  { title: "Chat Astrologer", icon: "chat" },
  { title: "Call Astrologer", icon: "call" },
  { title: "Kundli", icon: "kundli" },
  { title: "Horoscope", icon: "horoscope" },
  { title: "Kundli Matching", icon: "matching" },
  { title: "More", icon: "more" },
];

const filters = ["Language", "Expertise", "Price", "Online Now"];

const astrologers = [
  {
    name: "Dr. Neha Joshi",
    expertise: "Vedic, Numerology",
    details: "8+ Years Exp. - Hindi, English",
    rating: "4.8 (210)",
    price: "Rs 70/min",
    image: "/images/home/astrologer-neha.png",
  },
  {
    name: "Acharya Vikram Sharma",
    expertise: "Vedic, KP Astrologer",
    details: "10+ Years Exp. - Hindi",
    rating: "4.6 (180)",
    price: "Rs 60/min",
    image: "/images/home/astrologer-vikram.png",
  },
  {
    name: "Pandit Raghav Shastri",
    expertise: "Vedic, Astrology",
    details: "15+ Years Exp. - Hindi",
    rating: "4.7 (160)",
    price: "Rs 60/min",
    image: "/images/home/astrologer-raghav.png",
  },
  {
    name: "Astro Meera Iyer",
    expertise: "Vedic, Numerology",
    details: "12+ Years Exp. - English, Hindi",
    rating: "4.7 (85)",
    price: "Rs 80/min",
    image: "/images/home/astrologer-neha.png",
  },
];

function AstrologyIcon({ icon }: { icon: string }) {
  const common = "h-8 w-8";

  if (icon === "chat") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 6.8A5.2 5.2 0 0 1 10.2 2h3.6A5.2 5.2 0 0 1 19 7.2v2.5a5.2 5.2 0 0 1-5.2 5.2H11l-4.7 3.3v-4A5.2 5.2 0 0 1 5 10.8z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path d="M9 8.2h6M9 11.2h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      </svg>
    );
  }

  if (icon === "call") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="m7.1 4 2.4-1.1 2.1 4.2-1.9 1.5c.8 1.8 2.2 3.2 4.1 4l1.5-1.9 4.2 2.1-1.1 2.4c-.4.8-1.3 1.4-2.3 1.2C10 15.4 5.8 11.2 4.8 5.1 4.6 4.2 5.2 3.4 6.1 3z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    );
  }

  if (icon === "kundli") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3v18M3 12h18M5.7 5.7l12.6 12.6M18.3 5.7 5.7 18.3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <path d="M12 5.2c2 2.1 4.2 4.8 6.2 6.8-2 2-4.2 4.7-6.2 6.8-2-2.1-4.2-4.8-6.2-6.8 2-2 4.2-4.7 6.2-6.8Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
      </svg>
    );
  }

  if (icon === "horoscope") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 4v16M4 12h16M7.8 7.8l8.4 8.4M16.2 7.8l-8.4 8.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "matching") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4.5c2 1.7 3.3 3.4 4 5.2.7-1.8 2-3.5 4-5.2 2.1 2.5 2.3 5.2.8 8.1 1.2.5 2.3 1.4 3.2 2.7-2.4 2.7-5.1 3.3-8 1.8-2.9 1.5-5.6.9-8-1.8.9-1.3 2-2.2 3.2-2.7-1.5-2.9-1.3-5.6.8-8.1Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path d="M12 9.7v7.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h.01M12 12h.01M19 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m7 10 5 5 5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 16.9l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  );
}

export default function AstrologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-5 text-xs font-semibold text-muted">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-border">/</span>
          <span>Astrology Services</span>
        </div>

        <section className="text-center">
          <h1 className="font-serif text-3xl font-extrabold tracking-tight text-primary-deep sm:text-4xl">
            Astrology Services
          </h1>
          <p className="mt-2 text-sm font-semibold text-muted">
            Get guidance from experienced astrologers.
          </p>
        </section>

        <section className="mt-7 overflow-x-auto pb-2" aria-label="Astrology services">
          <div className="grid min-w-[720px] grid-cols-6 gap-3 sm:min-w-0">
            {services.map((service) => (
              <a
                key={service.title}
                href="#"
                className="group flex min-h-28 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-surface px-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <span className="grid h-12 w-12 place-items-center rounded-md bg-primary-soft text-primary ring-1 ring-primary/15 transition group-hover:bg-primary group-hover:text-white">
                  <AstrologyIcon icon={service.icon} />
                </span>
                <span className="text-xs font-extrabold leading-4 text-primary-deep">{service.title}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-base font-extrabold text-primary-deep sm:text-lg">Top Astrologers</h2>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Astrologer filters">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border border-border bg-surface px-3 text-xs font-extrabold text-muted shadow-sm transition hover:border-primary hover:text-primary"
              >
                {filter}
                <ChevronDownIcon />
              </button>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-lg border border-border bg-surface shadow-sm">
          <div className="divide-y divide-border">
            {astrologers.map((astrologer) => (
              <article key={astrologer.name} className="p-4 transition hover:bg-primary-soft/30 sm:p-5">
                <div className="flex gap-4">
                  <Image
                    src={astrologer.image}
                    alt={astrologer.name}
                    width={76}
                    height={76}
                    className="h-16 w-16 shrink-0 rounded-full border-2 border-primary/20 object-cover sm:h-[76px] sm:w-[76px]"
                  />

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-extrabold text-primary-deep sm:text-base">
                          {astrologer.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-muted">{astrologer.expertise}</p>
                        <p className="mt-1 text-xs font-semibold text-muted/90">{astrologer.details}</p>
                        <div className="mt-1 flex items-center gap-1 text-xs font-extrabold text-muted">
                          <StarIcon />
                          <span>{astrologer.rating}</span>
                        </div>
                        <p className="mt-2 text-sm font-extrabold text-foreground">{astrologer.price}</p>
                      </div>

                      <div className="grid w-full max-w-[10.5rem] grid-cols-2 gap-2 sm:w-[10.5rem]">
                        <a
                          href="#"
                          className="inline-flex h-9 items-center justify-center rounded-md border border-primary/20 bg-surface px-3 text-xs font-extrabold text-primary shadow-sm transition hover:bg-primary-soft"
                        >
                          Chat
                        </a>
                        <a
                          href="#"
                          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-xs font-extrabold text-white shadow-sm transition hover:bg-primary-hover"
                        >
                          Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-7 flex justify-center">
          <a
            href="#"
            className="inline-flex h-11 min-w-52 items-center justify-center rounded-md border border-primary/25 bg-surface px-6 text-sm font-extrabold text-primary shadow-sm transition hover:bg-primary-soft"
          >
            View All Astrologers
          </a>
        </div>
      </div>
    </main>
  );
}
