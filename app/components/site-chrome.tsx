import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Book Pandit", href: "/book-pandit-nearby" },
  { label: "Online Puja", href: "/book-online-puja" },
  { label: "Puja & Rituals", href: "/puja-and-rituals" },
  { label: "Astrology", href: "/astrology" },
  { label: "Shop", href: "/shop" },
  { label: "Insights", href: "/dharmagya-insight" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Book Pandit Nearby", href: "/book-pandit-nearby" },
  { label: "Online Puja", href: "/book-online-puja" },
  { label: "Puja & Rituals", href: "/puja-and-rituals" },
  { label: "Astrology", href: "/astrology" },
  { label: "Shop", href: "/shop" },
  { label: "Dharmagya Insight", href: "/dharmagya-insight" },
];

const supportLinks = [
  "Contact Us",
  "FAQ",
  "Refund Policy",
  "Terms & Conditions",
  "Privacy Policy",
  "Become a Pandit",
  "Become an Astrologer",
];

function LogoMark() {
  return (
    <span className="relative grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary ring-1 ring-primary/20">
      <svg className="h-7 w-7" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 5v22M5 16h22M8.2 8.2l15.6 15.6M23.8 8.2 8.2 23.8"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity=".45"
        />
        <path
          d="M16 24c-3.7-2.2-5.5-4.8-5.5-7.6 0-2.6 1.8-5.1 5.5-8 3.7 2.9 5.5 5.4 5.5 8 0 2.8-1.8 5.4-5.5 7.6Z"
          fill="currentColor"
          opacity=".9"
        />
        <circle cx="16" cy="16" r="4" fill="#fff8eb" />
      </svg>
    </span>
  );
}

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-primary-hover bg-primary/95 text-white shadow-lg shadow-primary/15 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Dharmagya home">
          <LogoMark />
          <div>
            <p className="font-serif text-2xl font-bold leading-none text-white">Dharmagya</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
              Sacred Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/85 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book-pandit-nearby"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary-deep px-5 text-sm font-bold text-white shadow-lg shadow-primary-deep/20 ring-1 ring-white/15 transition hover:bg-primary-hover"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-secondary-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark />
            <p className="font-serif text-2xl font-bold text-white">Dharmagya</p>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-secondary-soft/75">
            Your trusted platform for spiritual needs, guided rituals, and devotional services.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm">
            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-secondary-soft/75 transition hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Support</h3>
          <div className="mt-4 grid gap-2 text-sm">
            {supportLinks.map((link) => (
              <a key={link} href="#" className="text-secondary-soft/75 transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Contact Us</h3>
          <div className="mt-4 grid gap-3 text-sm text-secondary-soft/75">
            <a href="tel:+919876543210" className="transition hover:text-white">
              +91 98765 43210
            </a>
            <a href="mailto:support@dharmagya.com" className="transition hover:text-white">
              support@dharmagya.com
            </a>
          </div>
          <div className="mt-6 flex gap-3">
            {["f", "in", "x", "yt"].map((item) => (
              <a
                key={item}
                href="#"
                aria-label={`Dharmagya social ${item}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-xs font-bold text-white transition hover:bg-white/15"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-secondary-soft/60">
        (c) 2026 Dharmagya. All rights reserved.
      </div>
    </footer>
  );
}
