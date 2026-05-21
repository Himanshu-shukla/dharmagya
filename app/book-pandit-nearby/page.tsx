import Image from "next/image";
import Link from "next/link";
import { getPandits, getRituals } from "@/lib/api";

const steps = ["Location", "Ritual", "Pandit", "Details", "Payment"];

const fallbackRituals = [
  { title: "Griha Pravesh", icon: "home" },
  { title: "Satyanarayan Puja", icon: "flame" },
  { title: "Wedding Puja", icon: "lotus" },
  { title: "Mundan", icon: "person" },
  { title: "Namkaran", icon: "bell" },
  { title: "Death Rituals", icon: "temple" },
  { title: "Festival Puja", icon: "spark" },
];

const fallbackPandits = [
  {
    name: "Pandit Mohan Shastri",
    experience: "10+ Years Exp. - Hindi, Sanskrit",
    specialty: "Specialist in Griha Pravesh, Vastu Puja",
    rating: "4.8 (120)",
    distance: "2.1 km away",
    price: "Rs 1100",
    image: "/images/home/astrologer-vikram.png",
  },
  {
    name: "Pandit Ramesh Tiwari",
    experience: "15+ Years Exp. - Hindi",
    specialty: "Specialist in All Rituals",
    rating: "4.9 (95)",
    distance: "3.4 km away",
    price: "Rs 1500",
    image: "/images/home/astrologer-raghav.png",
  },
  {
    name: "Pandit Sandeep Joshi",
    experience: "8+ Years Exp. - Hindi, Sanskrit",
    specialty: "Specialist in Puja & Havan",
    rating: "4.7 (76)",
    distance: "4.2 km away",
    price: "Rs 900",
    image: "/images/home/astrologer-neha.png",
  },
];

function RitualIcon({ icon }: { icon: string }) {
  const common = "h-8 w-8";

  if (icon === "home") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 10.5 12 4l8 6.5V20H6v-7h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "flame") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21c-3.1 0-5.6-2.3-5.6-5.5 0-2.4 1.5-4.5 3.1-6.1.6 1.7 1.7 2.7 3.2 3.2-.4-2.7.4-5.4 2.2-7.6 1.8 2 2.8 4.2 2.8 6.6 0 1.1-.2 2.1-.7 3 1.2-.2 2.1-.7 2.8-1.5.1.6.2 1.2.2 1.8 0 3.6-3.3 6.1-8 6.1Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "lotus") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19c-2.5-1.7-3.8-3.8-3.8-6.2 0-2 1.2-4 3.8-6.1 2.6 2.1 3.8 4.1 3.8 6.1 0 2.4-1.3 4.5-3.8 6.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.8 17.6c-3.1-.2-4.9-1.7-5.5-4.7 2.8-.4 4.8.5 6 2.4M15.2 17.6c3.1-.2 4.9-1.7 5.5-4.7-2.8-.4-4.8.5-6 2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "person") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5.5 20c.8-3.5 3.1-5.3 6.5-5.3s5.7 1.8 6.5 5.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "bell") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 17h10l-1.3-2.1V10a3.7 3.7 0 0 0-7.4 0v4.9L7 17Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M10.5 20h3M12 4V2.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "temple") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 9h14M7 9v10M12 9v10M17 9v10M4 19h16M12 4l8 5H4l8-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5c1.4 2.4 3.2 4.2 5.5 5.5-2.3 1.4-4.1 3.2-5.5 5.5-1.4-2.3-3.2-4.1-5.5-5.5C8.8 7.7 10.6 5.9 12 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M5 16h3M16 19h3M19 5v2M5 5v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export default async function BookPanditNearbyPage() {
  const [apiPandits, ritualsData] = await Promise.all([getPandits(), getRituals()]);
  const pandits = apiPandits.length ? apiPandits : fallbackPandits;
  const rituals = ritualsData.rituals.length
    ? ritualsData.rituals.map((ritual) => ({ title: ritual.title.replace(" Puja", ""), icon: ritual.icon ?? "flame" }))
    : fallbackRituals;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="mb-5 text-xs font-semibold text-muted">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-border">/</span>
          <span>Book Pandit Nearby</span>
        </div>

        <section className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary-deep sm:text-4xl">Book Pandit Nearby</h1>
          <p className="mt-2 text-sm font-semibold text-muted">
            Find verified Pandits near you for all your rituals and ceremonies.
          </p>
        </section>

        <section className="mt-8">
          <div className="flex items-start justify-between gap-2">
            {steps.map((step, index) => {
              const isActive = index === 0;

              return (
                <div key={step} className="relative flex flex-1 flex-col items-center gap-2 text-center">
                  {index < steps.length - 1 ? (
                    <span className="absolute left-1/2 top-4 h-1 w-full rounded-full bg-border" aria-hidden="true" />
                  ) : null}
                  <span
                    className={`relative z-10 grid h-8 w-8 place-items-center rounded-full text-sm font-extrabold ring-4 ring-background ${
                      isActive ? "bg-primary text-white shadow-md shadow-primary/25" : "bg-surface text-muted ring-background"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className={`text-[11px] font-extrabold leading-3 ${isActive ? "text-primary" : "text-muted"}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-md border border-border bg-surface p-4 shadow-sm sm:p-5">
          <h2 className="text-base font-extrabold text-primary-deep">Select Location</h2>
          <button className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary" type="button">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Use my current location
          </button>

          <label className="mt-5 block text-sm font-bold text-foreground" htmlFor="city">
            Enter City / Pincode
          </label>
          <div className="mt-2 flex h-12 items-center rounded-sm border border-border bg-white px-3 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15">
            <input
              id="city"
              className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted/65"
              defaultValue="Jaipur, Rajasthan"
            />
            <svg className="h-5 w-5 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21s6-4.6 6-10a6 6 0 1 0-12 0c0 5.4 6 10 6 10Z" stroke="currentColor" strokeWidth="1.7" />
              <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          </div>
        </section>

        <section className="mt-7">
          <h2 className="text-base font-extrabold text-primary-deep">Select Ritual</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {rituals.map((ritual, index) => (
              <button
                key={ritual.title}
                className={`flex min-h-24 flex-col items-center justify-center gap-2 rounded-md border px-2 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md ${
                  index === 0
                    ? "border-primary bg-primary-soft text-primary"
                    : "border-border bg-white text-primary"
                }`}
                type="button"
              >
                <RitualIcon icon={ritual.icon} />
                <span className="text-xs font-extrabold leading-4 text-foreground">{ritual.title}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="mt-7">
          <h2 className="text-base font-extrabold text-primary-deep">Available Pandits Near You</h2>
          <div className="mt-4 space-y-4">
            {pandits.map((pandit) => (
              <article key={pandit.name} className="rounded-md border border-border bg-white p-4 shadow-sm transition hover:border-primary hover:shadow-md">
                <div className="flex gap-4">
                  <Image
                    src={pandit.image}
                    alt={pandit.name}
                    width={76}
                    height={76}
                    className="h-16 w-16 shrink-0 rounded-full border-2 border-primary/25 object-cover sm:h-[76px] sm:w-[76px]"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-extrabold text-primary-deep sm:text-base">{pandit.name}</h3>
                        <p className="mt-1 text-xs font-semibold text-muted">
                          {"details" in pandit ? pandit.details : pandit.experience}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-muted">
                          {"expertise" in pandit && Array.isArray(pandit.expertise)
                            ? `Specialist in ${pandit.expertise.join(", ")}`
                            : "specialty" in pandit
                              ? pandit.specialty
                              : ""}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center justify-between gap-4 sm:block sm:text-right">
                        <p className="text-base font-extrabold text-foreground">
                          {"priceLabel" in pandit ? pandit.priceLabel : pandit.price}
                        </p>
                        <button className="h-9 rounded-md bg-primary px-4 text-xs font-extrabold text-white shadow-sm transition hover:bg-primary-hover" type="button">
                          Book Now
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-muted">
                      <span className="text-primary">Rating {"ratingLabel" in pandit ? pandit.ratingLabel : pandit.rating}</span>
                      <span>{"distanceKm" in pandit ? `${pandit.distanceKm} km away` : "distance" in pandit ? pandit.distance : ""}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

    </main>
  );
}
