import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Puja Shop | Dharmagya",
  description:
    "Shop authentic puja samagri, rudraksha, yantra, idols, malas, and spiritual essentials with Dharmagya.",
};

const fallbackCategories = [
  { title: "Puja Samagri", icon: "samagri" },
  { title: "Rudraksha", icon: "rudraksha" },
  { title: "Yantra", icon: "yantra" },
  { title: "Idols", icon: "idol" },
  { title: "Mala", icon: "mala" },
  { title: "Books", icon: "books" },
  { title: "More", icon: "more" },
];

const fallbackProducts = [
  {
    title: "Puja Thali Set",
    detail: "Brass",
    price: "Rs 699",
    oldPrice: "Rs 999",
    visual: "thali",
  },
  {
    title: "5 Mukhi Rudraksha",
    detail: "Original",
    price: "Rs 499",
    oldPrice: "Rs 799",
    visual: "rudraksha",
  },
  {
    title: "Shree Yantra",
    detail: "Brass",
    price: "Rs 1299",
    oldPrice: "Rs 1599",
    visual: "yantra",
  },
  {
    title: "Tulsi Mala",
    detail: "108 Beads",
    price: "Rs 299",
    oldPrice: "Rs 399",
    visual: "mala",
  },
];

const assurances = [
  { label: "Authentic Products", icon: "seal" },
  { label: "Secure Packaging", icon: "box" },
  { label: "Pan-India Delivery", icon: "truck" },
  { label: "Easy Returns", icon: "return" },
];

function SearchIcon() {
  return (
    <svg className="h-4 w-4 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m20 20-4.2-4.2M10.8 18a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 5h1.9l1.6 9.2a2 2 0 0 0 2 1.7h5.9a2 2 0 0 0 1.9-1.5L20 8H8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="10.2" cy="19" r="1.2" fill="currentColor" />
      <circle cx="17" cy="19" r="1.2" fill="currentColor" />
    </svg>
  );
}

function CategoryIcon({ icon }: { icon: string }) {
  const common = "h-9 w-9";

  if (icon === "samagri") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M14 29h20l-2 11H16l-2-11Z" fill="#f7b64a" />
        <path d="M12 30h24M18 30v-9h12v9M21 21v-6h6v6" stroke="#8a4212" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
        <path d="M20 12c0-3 4-6 4-6s4 3 4 6a4 4 0 0 1-8 0Z" fill="#e25822" />
      </svg>
    );
  }

  if (icon === "rudraksha") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="13" fill="#8b3f12" />
        <path d="M24 11v26M11 24h26M15 15l18 18M33 15 15 33" stroke="#3d1f0d" strokeLinecap="round" strokeWidth="1.9" />
        <circle cx="24" cy="24" r="4" fill="#5c2b0e" />
      </svg>
    );
  }

  if (icon === "yantra") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="11" y="11" width="26" height="26" rx="3" fill="#d6a647" />
        <path d="M24 15v18M15 24h18M18 18l12 12M30 18 18 30" stroke="#6f4312" strokeLinecap="round" strokeWidth="1.6" />
        <rect x="16" y="16" width="16" height="16" rx="1" stroke="#6f4312" strokeWidth="1.8" />
      </svg>
    );
  }

  if (icon === "idol") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M17 39h14l-2-12H19l-2 12Z" fill="#b97829" />
        <circle cx="24" cy="16" r="7" fill="#d39a3a" />
        <path d="M17 39h14M20 27c-4-2-5-6-3-10M28 27c4-2 5-6 3-10M21 15h6" stroke="#6f4312" strokeLinecap="round" strokeWidth="2" />
      </svg>
    );
  }

  if (icon === "mala") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index / 12) * Math.PI * 2;
          const x = 24 + Math.cos(angle) * 13;
          const y = 24 + Math.sin(angle) * 13;

          return <circle key={index} cx={x} cy={y} r="2.6" fill="#b17624" />;
        })}
        <circle cx="24" cy="39" r="3.3" fill="#8a4212" />
      </svg>
    );
  }

  if (icon === "books") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="13" y="10" width="18" height="26" rx="2" fill="#fbdfa0" stroke="#8a4212" strokeWidth="2" />
        <path d="M18 16h8M18 21h8M34 13v24M13 36h18" stroke="#8a4212" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M31 12h4v25h-4z" fill="#c46a24" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path d="M15 24h.01M24 24h.01M33 24h.01" stroke="#8a4212" strokeLinecap="round" strokeWidth="5" />
    </svg>
  );
}

function ProductVisual({ visual }: { visual: string }) {
  if (visual === "thali") {
    return (
      <svg className="h-full w-full" viewBox="0 0 180 130" fill="none" aria-hidden="true">
        <ellipse cx="90" cy="74" rx="67" ry="28" fill="#c43e22" />
        <ellipse cx="90" cy="68" rx="59" ry="23" fill="#f7c15b" />
        <circle cx="57" cy="63" r="13" fill="#d9361f" />
        <circle cx="57" cy="60" r="7" fill="#ffd978" />
        <path d="M108 47c0-10 12-20 12-20s12 10 12 20a12 12 0 0 1-24 0Z" fill="#ef7d22" />
        <path d="M109 81c11 7 24 7 35 0" stroke="#7d2d15" strokeLinecap="round" strokeWidth="5" />
        <circle cx="86" cy="68" r="12" fill="#a34816" />
        <circle cx="87" cy="65" r="7" fill="#e5a73b" />
      </svg>
    );
  }

  if (visual === "rudraksha") {
    return (
      <svg className="h-full w-full" viewBox="0 0 180 130" fill="none" aria-hidden="true">
        <circle cx="90" cy="64" r="40" fill="#8b3f12" />
        <path d="M90 24v80M50 64h80M61 35l58 58M119 35 61 93" stroke="#3d1f0d" strokeLinecap="round" strokeWidth="5" />
        <path d="M72 29c-6 22-6 46 0 70M108 29c6 22 6 46 0 70" stroke="#5c2b0e" strokeLinecap="round" strokeWidth="5" />
        <circle cx="90" cy="64" r="11" fill="#4e260d" />
      </svg>
    );
  }

  if (visual === "yantra") {
    return (
      <svg className="h-full w-full" viewBox="0 0 180 130" fill="none" aria-hidden="true">
        <path d="M49 31h82v62H49z" fill="#b98735" />
        <path d="M55 25h82v62H55z" fill="#d7a84b" />
        <path d="M67 37h58v38H67zM96 37v38M67 56h58M78 42l36 28M114 42 78 70" stroke="#70410f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M45 94h80" stroke="#8b5a22" strokeLinecap="round" strokeWidth="8" />
      </svg>
    );
  }

  return (
    <svg className="h-full w-full" viewBox="0 0 180 130" fill="none" aria-hidden="true">
      {Array.from({ length: 22 }).map((_, index) => {
        const angle = (index / 22) * Math.PI * 2;
        const x = 90 + Math.cos(angle) * 49;
        const y = 64 + Math.sin(angle) * 31;

        return <circle key={index} cx={x} cy={y} r="6.5" fill="#b17624" />;
      })}
      <circle cx="90" cy="96" r="8" fill="#8a4212" />
    </svg>
  );
}

function AssuranceIcon({ icon }: { icon: string }) {
  const common = "h-4 w-4";

  if (icon === "box") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m4 8 8-4 8 4-8 4-8-4Zm0 0v8l8 4 8-4V8M12 12v8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
      </svg>
    );
  }

  if (icon === "truck") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h10v9H4V6Zm10 3h3l3 3v3h-6V9Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.9" />
        <circle cx="8" cy="18" r="1.8" fill="currentColor" />
        <circle cx="17" cy="18" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  if (icon === "return") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 7 4 11l4 4M4 11h10a5 5 0 0 1 0 10h-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.5-2.5 7.6-7 10-4.5-2.4-7-5.5-7-10V6l7-3Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.9" />
      <path d="m8.5 12 2.2 2.2 4.8-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.9" />
    </svg>
  );
}

export default async function BookOnlinePujaPage() {
  const productData = await getProducts();
  const products = productData.products.length ? productData.products : fallbackProducts;
  const categories = productData.categories.length
    ? productData.categories.map((title) => ({ title, icon: title.toLowerCase().includes("rudraksha") ? "rudraksha" : title.toLowerCase().includes("yantra") ? "yantra" : title.toLowerCase().includes("mala") ? "mala" : "samagri" }))
    : fallbackCategories;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:py-8">
        <nav className="mb-4 text-xs font-semibold text-muted" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-border">/</span>
          <span>Shop</span>
        </nav>

        <section className="rounded-lg border border-border bg-surface p-3 shadow-sm sm:p-4">
          <div className="flex items-center gap-3">
            <label
              htmlFor="puja-shop-search"
              className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-white px-3 shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10"
            >
              <SearchIcon />
              <input
                id="puja-shop-search"
                type="search"
                placeholder="Search for products..."
                className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-muted/60"
              />
            </label>
            <button
              type="button"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-white text-primary shadow-sm transition hover:border-primary hover:bg-primary-soft"
              aria-label="Open cart"
            >
              <CartIcon />
            </button>
          </div>

          <div className="mt-4 overflow-x-auto pb-1" aria-label="Puja shop categories">
            <div className="grid min-w-[700px] grid-cols-7 gap-3 sm:min-w-0">
              {categories.map((category) => (
                <a
                  key={category.title}
                  href="#"
                  className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg border border-border bg-white px-2 text-center shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-[#fff7e8] text-[#8a4212] ring-1 ring-[#f2d4a4] transition group-hover:bg-primary-soft">
                    <CategoryIcon icon={category.icon} />
                  </span>
                  <span className="text-[11px] font-extrabold leading-4 text-primary-deep">{category.title}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="mb-3 flex items-center justify-between gap-4">
            <h1 className="text-base font-extrabold text-primary-deep sm:text-lg">Best Sellers</h1>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.title}
                className="overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
              >
                <div className="grid aspect-[1.28] place-items-center bg-white px-3 pt-3">
                  <ProductVisual visual={product.visual} />
                </div>
                <div className="border-t border-border px-3 py-3">
                  <h2 className="min-h-10 text-xs font-extrabold leading-5 text-primary-deep sm:text-sm">
                    {product.title}
                    <span className="block font-bold text-muted">({product.detail})</span>
                  </h2>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <span className="text-sm font-extrabold text-[#d14b1f]">
                      {typeof product.price === "number" ? `Rs ${product.price}` : product.price}
                    </span>
                    {product.oldPrice ? (
                      <span className="text-[11px] font-bold text-muted line-through">
                        {typeof product.oldPrice === "number" ? `Rs ${product.oldPrice}` : product.oldPrice}
                      </span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    className="mt-3 h-9 w-full rounded-md border border-[#f0b36f] bg-white text-[11px] font-extrabold text-[#d14b1f] shadow-sm transition hover:bg-[#fff7e8]"
                  >
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-5 rounded-lg border border-border bg-surface px-3 py-3 shadow-sm">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {assurances.map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2 rounded-md bg-[#fff7e8] px-2 py-2 text-center text-[11px] font-extrabold text-primary-deep ring-1 ring-[#f2d4a4]">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-[#d14b1f] ring-1 ring-[#f2d4a4]">
                  <AssuranceIcon icon={item.icon} />
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
