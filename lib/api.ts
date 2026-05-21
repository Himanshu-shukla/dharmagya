export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";
export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL ?? "http://localhost:4000";

export type Provider = {
  id: string;
  name: string;
  expertise: string[];
  languages: string[];
  experienceYears: number;
  rating: number;
  reviewCount: number;
  ratePerMinute?: number;
  basePrice?: number;
  image: string;
  city?: string;
  distanceKm?: number;
  isOnline?: boolean;
  priceLabel: string;
  ratingLabel: string;
  details: string;
};

export type Ritual = {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  icon?: string;
  price: number;
};

export type Product = {
  id: string;
  title: string;
  category: string;
  detail: string;
  price: number;
  oldPrice?: number;
  visual: string;
};

const fallbackAstrologers: Provider[] = [
  provider("demo-neha", "Dr. Neha Joshi", ["Vedic", "Numerology"], ["Hindi", "English"], 8, 4.8, 210, 70, "/images/home/astrologer-neha.png"),
  provider("demo-vikram", "Acharya Vikram Sharma", ["Vedic", "KP Astrology"], ["Hindi"], 10, 4.6, 180, 60, "/images/home/astrologer-vikram.png"),
  provider("demo-raghav", "Pandit Raghav Shastri", ["Vedic", "Astrology"], ["Hindi"], 15, 4.7, 160, 60, "/images/home/astrologer-raghav.png"),
  provider("demo-meera", "Astro Meera Iyer", ["Vedic", "Numerology"], ["English", "Hindi"], 12, 4.7, 85, 80, "/images/home/astrologer-neha.png"),
];

const fallbackPandits: Provider[] = [
  pandit("demo-mohan", "Pandit Mohan Shastri", ["Griha Pravesh", "Vastu Puja"], ["Hindi", "Sanskrit"], 10, 4.8, 120, 1100, "/images/home/astrologer-vikram.png", 2.1),
  pandit("demo-ramesh", "Pandit Ramesh Tiwari", ["All Rituals"], ["Hindi"], 15, 4.9, 95, 1500, "/images/home/astrologer-raghav.png", 3.4),
  pandit("demo-sandeep", "Pandit Sandeep Joshi", ["Puja", "Havan"], ["Hindi", "Sanskrit"], 8, 4.7, 76, 900, "/images/home/astrologer-neha.png", 4.2),
];

const fallbackRituals: Ritual[] = [
  { id: "demo-griha", title: "Griha Pravesh Puja", category: "Daily Puja", description: "Significance, vidhi and benefits", image: "/images/home/puja-griha-pravesh.png", price: 1100 },
  { id: "demo-satyanarayan", title: "Satyanarayan Puja", category: "Daily Puja", description: "Vidhi, katha, samagri and benefits", image: "/images/home/puja-satyanarayan.png", price: 1100 },
  { id: "demo-rudra", title: "Rudrabhishek Puja", category: "Graha Shanti", description: "Vidhi, samagri and benefits", image: "/images/home/puja-rudrabhishek.png", price: 2100 },
  { id: "demo-mundan", title: "Mundan Sanskar", category: "Sanskar Rituals", description: "Vidhi, importance and benefits", icon: "mundan", price: 1500 },
  { id: "demo-navgraha", title: "Navgraha Shanti Puja", category: "Graha Shanti", description: "Vidhi, samagri and benefits", image: "/images/home/puja-navgraha.png", price: 2100 },
  { id: "demo-vastu", title: "Vastu Shanti Puja", category: "Vastu Puja", description: "For home, office and property", icon: "vastu", price: 2100 },
];

const fallbackProducts: Product[] = [
  { id: "demo-thali", title: "Puja Thali Set", category: "Puja Samagri", detail: "Brass", price: 699, oldPrice: 999, visual: "thali" },
  { id: "demo-rudraksha", title: "5 Mukhi Rudraksha", category: "Rudraksha", detail: "Original", price: 499, oldPrice: 799, visual: "rudraksha" },
  { id: "demo-yantra", title: "Shree Yantra", category: "Yantra", detail: "Brass", price: 1299, oldPrice: 1599, visual: "yantra" },
  { id: "demo-mala", title: "Tulsi Mala", category: "Mala", detail: "108 Beads", price: 299, oldPrice: 399, visual: "mala" },
];

export async function getAstrologers() {
  return fetchJson<{ astrologers: Provider[] }>("/astrologers", { astrologers: fallbackAstrologers }).then((data) => data.astrologers);
}

export async function getPandits() {
  return fetchJson<{ pandits: Provider[] }>("/pandits", { pandits: fallbackPandits }).then((data) => data.pandits);
}

export async function getRituals() {
  return fetchJson<{ rituals: Ritual[]; categories: string[] }>("/rituals", {
    rituals: fallbackRituals,
    categories: [...new Set(fallbackRituals.map((ritual) => ritual.category))],
  });
}

export async function getProducts() {
  return fetchJson<{ products: Product[]; categories: string[] }>("/products", {
    products: fallbackProducts,
    categories: [...new Set(fallbackProducts.map((product) => product.category))],
  });
}

async function fetchJson<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API_URL}${path}`, { next: { revalidate: 30 } });
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

function provider(id: string, name: string, expertise: string[], languages: string[], years: number, rating: number, reviews: number, rate: number, image: string): Provider {
  return {
    id,
    name,
    expertise,
    languages,
    experienceYears: years,
    rating,
    reviewCount: reviews,
    ratePerMinute: rate,
    image,
    isOnline: true,
    priceLabel: `Rs ${rate}/min`,
    ratingLabel: `${rating} (${reviews})`,
    details: `${years}+ Years Exp. - ${languages.join(", ")}`,
  };
}

function pandit(id: string, name: string, expertise: string[], languages: string[], years: number, rating: number, reviews: number, price: number, image: string, distance: number): Provider {
  return {
    ...provider(id, name, expertise, languages, years, rating, reviews, 0, image),
    basePrice: price,
    city: "Jaipur, Rajasthan",
    distanceKm: distance,
    priceLabel: `Rs ${price}`,
    details: `${years}+ Years Exp. - ${languages.join(", ")}`,
  };
}
