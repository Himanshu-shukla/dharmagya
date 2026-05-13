import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Puja & Rituals | Dharmagya",
  description:
    "Explore daily pujas, festival rituals, sanskars, graha shanti, vastu puja, and other sacred rituals with Dharmagya.",
};

const categories = [
  "Daily Puja",
  "Festival Puja",
  "Sanskar Rituals",
  "Graha Shanti",
  "Marriage Rituals",
  "Vastu Puja",
  "Death Rituals",
  "Regional Rituals",
  "Special Rituals",
];

type Ritual =
  | {
      kind: "image";
      title: string;
      description: string;
      image: string;
    }
  | {
      kind: "icon";
      title: string;
      description: string;
      icon: string;
    };

const rituals: Ritual[] = [
  {
    kind: "image",
    title: "Griha Pravesh Puja",
    description: "Significance, vidhi and benefits",
    image: "/images/home/puja-griha-pravesh.png",
  },
  {
    kind: "image",
    title: "Satyanarayan Puja",
    description: "Vidhi, katha, samagri and benefits",
    image: "/images/home/puja-satyanarayan.png",
  },
  {
    kind: "image",
    title: "Rudrabhishek Puja",
    description: "Vidhi, samagri and benefits",
    image: "/images/home/puja-rudrabhishek.png",
  },
  {
    kind: "icon",
    title: "Mundan Sanskar",
    description: "Vidhi, importance and benefits",
    icon: "mundan",
  },
  {
    kind: "image",
    title: "Navgraha Shanti Puja",
    description: "Vidhi, samagri and benefits",
    image: "/images/home/puja-navgraha.png",
  },
  {
    kind: "icon",
    title: "Vastu Shanti Puja",
    description: "For home, office and property",
    icon: "vastu",
  },
];

function ChevronIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m9 5 7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RitualFallbackIcon({ icon }: { icon: string }) {
  if (icon === "vastu") {
    return (
      <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M8 22 24 9l16 13v18H12V26h24"
          fill="currentColor"
          opacity=".14"
        />
        <path
          d="M8 22 24 9l16 13v18H12V26h24M20 40V29h8v11"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 5v5M24 16v5M19 11h10"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 20.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM11 40c1.7-7 6.1-10.5 13-10.5S35.3 33 37 40"
        fill="currentColor"
        opacity=".14"
      />
      <path
        d="M24 20.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14ZM11 40c1.7-7 6.1-10.5 13-10.5S35.3 33 37 40M19 7.5h10M20.5 4.5h7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RitualVisual({ ritual }: { ritual: Ritual }) {
  return (
    <div className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-md bg-primary-soft text-primary ring-1 ring-primary/15 sm:h-24 sm:w-24">
      {ritual.kind === "image" ? (
        <Image
          src={ritual.image}
          alt={ritual.title}
          width={112}
          height={112}
          className="h-full w-full object-cover"
        />
      ) : (
        <RitualFallbackIcon icon={ritual.icon} />
      )}
    </div>
  );
}

export default function PujaAndRitualsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-5 text-xs font-semibold text-muted">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-border">/</span>
          <span>Puja & Rituals</span>
        </div>

        <section>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary-deep sm:text-4xl">
            Puja & Rituals
          </h1>
          <p className="mt-2 max-w-2xl text-sm font-semibold text-muted">
            Discover the importance, process and benefits of various pujas and rituals.
          </p>
        </section>

        <section className="mt-7 rounded-lg border border-border bg-surface shadow-sm">
          <div className="grid lg:grid-cols-[15rem_1fr]">
            <aside className="border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <h2 className="text-sm font-extrabold text-primary-deep">Categories</h2>
              <nav className="mt-4 grid gap-1 text-sm font-bold text-muted" aria-label="Ritual categories">
                {categories.map((category, index) => (
                  <a
                    key={category}
                    href="#"
                    className={`rounded-md px-3 py-3 transition hover:bg-primary-soft hover:text-primary ${
                      index === 0 ? "bg-primary-soft text-primary" : ""
                    }`}
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="grid gap-4 p-4 sm:p-5">
              {rituals.map((ritual) => (
                <article
                  key={ritual.title}
                  className="group rounded-lg border border-border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <RitualVisual ritual={ritual} />

                    <div className="min-w-0 flex-1">
                      <h2 className="text-base font-extrabold leading-5 text-primary-deep">
                        {ritual.title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold leading-5 text-muted sm:text-sm">
                        {ritual.description}
                      </p>
                    </div>

                    <a
                      href="#"
                      className="hidden shrink-0 items-center gap-1 text-xs font-extrabold text-primary transition group-hover:text-primary-hover sm:inline-flex"
                    >
                      View Details
                      <ChevronIcon />
                    </a>
                  </div>

                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-extrabold text-primary transition hover:text-primary-hover sm:hidden"
                  >
                    View Details
                    <ChevronIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-7 overflow-hidden rounded-lg border border-primary/20 bg-surface shadow-sm">
          <div className="grid items-center gap-4 bg-[linear-gradient(90deg,var(--surface),var(--primary-soft))] px-5 py-4 sm:grid-cols-[1fr_auto] sm:px-6">
            <div>
              <p className="text-sm font-extrabold text-primary-deep">
                Need help in choosing the right puja?
              </p>
              <p className="mt-1 text-sm font-bold text-muted">Talk to our experts</p>
            </div>

            <div className="flex items-end justify-between gap-4 sm:justify-end">
              <Link
                href="/book-pandit-nearby"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-xs font-extrabold text-white shadow-sm transition hover:bg-primary-hover"
              >
                Consult Now
              </Link>
              <Image
                src="/images/home/astrologer-raghav.png"
                alt="Dharmagya ritual expert"
                width={112}
                height={112}
                className="-mb-4 h-24 w-24 rounded-t-md object-cover object-top sm:h-28 sm:w-28"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
