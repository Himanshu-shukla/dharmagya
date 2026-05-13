import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Book Pandit Nearby", icon: "pandit", href: "/book-pandit-nearby" },
  { title: "Book Online Puja", icon: "puja", href: "/book-online-puja" },
  { title: "Puja & Rituals", icon: "lotus", href: "/puja-and-rituals" },
  { title: "Chat to Astrologer", icon: "chat", href: "/astrology/chat-with-astrologer" },
  { title: "Call to Astrologer", icon: "call", href: "/astrology/call-to-astrologer" },
  { title: "Shop", icon: "shop", href: "/shop" },
  { title: "Dharmagya Insight", icon: "insight", href: "/dharmagya-insight" },
];

const pujas = [
  {
    title: "Satyanarayan Puja",
    price: "Rs 1100",
    image: "/images/home/puja-satyanarayan.png",
  },
  {
    title: "Rudrabhishek Puja",
    price: "Rs 2100",
    image: "/images/home/puja-rudrabhishek.png",
  },
  {
    title: "Griha Pravesh Puja",
    price: "Rs 1500",
    image: "/images/home/puja-griha-pravesh.png",
  },
  {
    title: "Kaal Sarp Dosh Puja",
    price: "Rs 2100",
    image: "/images/home/puja-kaal-sarp.png",
  },
  {
    title: "Navgraha Shanti Puja",
    price: "Rs 2100",
    image: "/images/home/puja-navgraha.png",
  },
];

const astrologers = [
  {
    name: "Dr. Neha Joshi",
    rating: "4.8 (210)",
    meta: "Hindi, English",
    price: "Rs 75/min",
    image: "/images/home/astrologer-neha.png",
  },
  {
    name: "Acharya Vikram Sharma",
    rating: "4.8 (198)",
    meta: "Vedic, KP Astrology",
    price: "Rs 60/min",
    image: "/images/home/astrologer-vikram.png",
  },
  {
    name: "Pandit Raghav Shastri",
    rating: "Vastu Guru",
    meta: "Hindi, Sanskrit",
    price: "Rs 80/min",
    image: "/images/home/astrologer-raghav.png",
  },
];

function ServiceIcon({ icon }: { icon: string }) {
  const common = "h-7 w-7";

  if (icon === "chat") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 6.8A5.2 5.2 0 0 1 10.2 2h3.6A5.2 5.2 0 0 1 19 7.2v2.6a5.2 5.2 0 0 1-5.2 5.2H11l-4.7 3.3v-4.1A5.2 5.2 0 0 1 5 10.8z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 8h6M9 11h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "call") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.2 4.1 9.5 3l2.1 4.2-1.8 1.4c.8 1.8 2.2 3.2 4 4l1.4-1.8 4.2 2.1-1.1 2.3c-.4.9-1.3 1.4-2.3 1.2C9.9 15.4 5.8 11.3 4.8 5.2c-.2-1 .4-1.9 1.3-2.3Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 5.2c1.8.6 3.2 2 3.8 3.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "shop") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.5 8.5h12l-1.1 8.8a2 2 0 0 1-2 1.7H9.6a2 2 0 0 1-2-1.7z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M9 8.5a3 3 0 0 1 6 0M6 8.5H4M20 8.5h-2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "insight") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5c1.5 2.5 3.4 4.4 5.8 5.8-2.4 1.5-4.3 3.4-5.8 5.8-1.5-2.4-3.4-4.3-5.8-5.8C8.6 7.9 10.5 6 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M5 15.5h3M16 18.5h3M18.5 4.5v2M4.5 5.5v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "lotus") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 18.5c-2.7-1.8-4-4-4-6.5 0-2.2 1.3-4.3 4-6.5 2.7 2.2 4 4.3 4 6.5 0 2.5-1.3 4.7-4 6.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M8.7 17.2c-3.2-.3-5.1-1.9-5.7-5 2.9-.4 5 .5 6.2 2.5M15.3 17.2c3.2-.3 5.1-1.9 5.7-5-2.9-.4-5 .5-6.2 2.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "pandit") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M5.5 20c.8-3.5 3.1-5.3 6.5-5.3s5.7 1.8 6.5 5.3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path d="M9 4.5h6M10.5 2.8h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 19h10M8 16.5h8M9 14h6M12 4.5c2.7 2.1 4 4.2 4 6.3 0 2.4-1.8 4.2-4 4.2s-4-1.8-4-4.2c0-2.1 1.3-4.2 4-6.3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="text-xl font-bold text-primary-deep sm:text-2xl">{title}</h2>
      <a href="#" className="text-sm font-semibold text-primary transition hover:text-primary-hover">
        View All
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-b-lg rounded-t-sm border border-primary/20 bg-primary-deep shadow-xl shadow-primary/10">
          <Image
            src="/images/home/hero-temple.png"
            alt="Golden temple architecture at sunrise"
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(53,16,34,.86),rgba(101,24,63,.52),rgba(53,16,34,.78))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,248,242,.24),transparent_42%)]" />

          <div className="relative mx-auto flex min-h-[390px] max-w-3xl flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[430px]">
            <p className="mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-secondary-soft">
              Trusted rituals. Verified guidance.
            </p>
            <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              Your Trusted Spiritual Companion
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-[#fff6e5] sm:text-lg">
              Book pandits, online pujas, astrology consultations, rituals, and spiritual products in one place.
            </p>
            <div className="mt-8 flex w-full max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/book-online-puja"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-primary-hover"
              >
                Book Puja Now
              </Link>
              <a
                href="/astrology"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 bg-primary-deep/45 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Talk to Astrologer
              </a>
              <a
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 bg-primary-deep/45 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                Find Pandit Nearby
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid grid-cols-2 gap-3 rounded-lg border border-border bg-surface p-3 shadow-xl shadow-primary/10 sm:grid-cols-3 lg:grid-cols-7">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-md border border-border bg-surface px-3 text-center transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary ring-1 ring-primary/20 transition group-hover:bg-primary group-hover:text-white">
                <ServiceIcon icon={service.icon} />
              </span>
              <span className="max-w-28 text-sm font-bold leading-5 text-foreground">{service.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading title="Popular Pujas" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pujas.map((puja) => (
            <a
              key={puja.title}
              href="#"
              className="group overflow-hidden rounded-lg border border-border bg-surface p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <div className="mx-auto mb-4 grid aspect-square w-28 place-items-center overflow-hidden rounded-md bg-secondary-soft">
                <Image
                  src={puja.image}
                  alt={puja.title}
                  width={144}
                  height={144}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="min-h-10 text-sm font-bold leading-5 text-primary-deep">{puja.title}</h3>
              <p className="mt-2 text-sm font-extrabold text-foreground">{puja.price}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SectionHeading title="Astrologers Online" />
        <div className="grid gap-4 lg:grid-cols-3">
          {astrologers.map((astrologer) => (
            <article
              key={astrologer.name}
              className="rounded-lg border border-border bg-surface p-4 shadow-sm transition hover:border-primary hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={astrologer.image}
                  alt={astrologer.name}
                  width={78}
                  height={78}
                  className="h-[78px] w-[78px] rounded-full border-2 border-primary/25 object-cover"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-bold text-primary-deep">{astrologer.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-muted">{astrologer.rating}</p>
                  <p className="mt-1 text-sm text-muted/85">{astrologer.meta}</p>
                  <p className="mt-1 text-sm font-extrabold text-foreground">{astrologer.price}</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href="/astrology"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary/20 text-sm font-bold text-primary transition hover:bg-primary-soft"
                >
                  Chat
                </a>
                <a
                  href="/astrology"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary/20 text-sm font-bold text-primary transition hover:bg-primary-soft"
                >
                  Call
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 text-sm font-bold text-muted sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {["Verified Pandits", "Transparent Pricing", "Secure Payments", "24/7 Support"].map((item) => (
            <div key={item} className="flex items-center justify-center gap-3 sm:justify-start">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary ring-1 ring-primary/20">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="m5 12 4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
