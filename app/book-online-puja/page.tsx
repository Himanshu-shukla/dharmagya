import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Online Puja | Dharmagya",
  description:
    "Book online pujas with verified pandits, live video darshan, prasad delivery, and complete ritual support.",
};

const categories = ["All", "Health", "Wealth", "Career", "Dosha", "Relationships", "More"];

const onlinePujas = [
  {
    title: "Maha Mrityunjaya Puja",
    benefit: "For good health & protection",
    includes: "Puja, Jaap, Prasad, Certificate, Live Video",
    duration: "60-90 mins",
    price: "Rs 2100",
    image: "/images/home/puja-rudrabhishek.png",
  },
  {
    title: "Lakshmi Kubera Puja",
    benefit: "For wealth & prosperity",
    includes: "Puja, Sampat, Prasad, Certificate, Live Video",
    duration: "60 mins",
    price: "Rs 3100",
    image: "/images/home/puja-satyanarayan.png",
  },
  {
    title: "Navgraha Shanti Puja",
    benefit: "For planetary peace",
    includes: "Puja, Samagri, Prasad, Certificate, Live Video",
    duration: "90 mins",
    price: "Rs 2500",
    image: "/images/home/puja-navgraha.png",
  },
  {
    title: "Kaal Sarp Dosh Puja",
    benefit: "For relief from Kaal Sarp Dosh",
    includes: "Puja, Samagri, Prasad, Certificate, Live Video",
    duration: "120 mins",
    price: "Rs 3100",
    image: "/images/home/puja-kaal-sarp.png",
  },
];

function SearchIcon() {
  return (
    <svg className="h-5 w-5 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m20 20-4.2-4.2M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg className="h-12 w-12" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="m7 33 4-18 9 10 4-14 4 14 9-10 4 18H7Z"
        fill="currentColor"
        opacity=".16"
      />
      <path
        d="m7 33 4-18 9 10 4-14 4 14 9-10 4 18H7ZM10 37h28"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="15" r="2.5" fill="currentColor" />
      <circle cx="24" cy="11" r="2.5" fill="currentColor" />
      <circle cx="37" cy="15" r="2.5" fill="currentColor" />
    </svg>
  );
}

export default function BookOnlinePujaPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-5 text-xs font-semibold text-muted">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-border">/</span>
          <span>Book Online Puja</span>
        </div>

        <section>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary-deep sm:text-4xl">
            Book Online Puja
          </h1>
          <p className="mt-2 max-w-2xl text-sm font-semibold text-muted">
            Experience sacred pujas from anywhere with verified pandits.
          </p>
        </section>

        <section className="mt-6">
          <label
            htmlFor="puja-search"
            className="flex h-12 items-center gap-3 rounded-md border border-border bg-surface px-4 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15"
          >
            <SearchIcon />
            <input
              id="puja-search"
              type="search"
              placeholder="Search puja..."
              className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted/65"
            />
          </label>
        </section>

        <section className="mt-5 overflow-x-auto pb-1" aria-label="Puja categories">
          <div className="flex min-w-max gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`h-9 rounded-md px-4 text-xs font-extrabold shadow-sm transition ${
                  index === 0
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "border border-border bg-surface text-muted hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-5 space-y-4">
          {onlinePujas.map((puja) => (
            <article
              key={puja.title}
              className="rounded-lg border border-border bg-surface p-3 shadow-sm transition hover:border-primary hover:shadow-md sm:p-4"
            >
              <div className="flex gap-3 sm:gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-secondary-soft ring-1 ring-border sm:h-28 sm:w-28">
                  <Image src={puja.image} alt={puja.title} fill sizes="112px" className="object-cover" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex min-h-full flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h2 className="text-sm font-extrabold leading-5 text-primary-deep sm:text-base">
                        {puja.title}
                      </h2>
                      <p className="mt-1 text-xs font-bold text-muted">{puja.benefit}</p>
                      <p className="mt-2 text-[11px] font-semibold leading-4 text-muted/85 sm:text-xs">
                        Includes: {puja.includes}
                      </p>
                      <p className="mt-1 text-[11px] font-bold text-muted sm:text-xs">
                        Duration: {puja.duration}
                      </p>
                      <p className="mt-2 text-sm font-extrabold text-foreground">{puja.price}</p>
                    </div>

                    <button
                      type="button"
                      className="h-9 shrink-0 self-start rounded-md bg-primary px-4 text-xs font-extrabold text-white shadow-sm transition hover:bg-primary-hover sm:self-end"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-5 rounded-lg border border-primary/20 bg-primary-soft p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-md bg-surface text-primary ring-1 ring-primary/20">
              <CrownIcon />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-extrabold text-muted">Can&apos;t find the puja you are looking for?</p>
              <h2 className="mt-1 text-base font-extrabold text-primary-deep">Custom Puja Booking</h2>
            </div>
            <button
              type="button"
              className="h-10 shrink-0 rounded-md bg-primary px-4 text-xs font-extrabold text-white shadow-sm transition hover:bg-primary-hover"
            >
              Book Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
