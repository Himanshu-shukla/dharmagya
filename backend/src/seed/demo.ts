import bcrypt from "bcryptjs";
import { connectDb, disconnectDb } from "../config/db.js";
import { Booking, CallSession, ChatMessage, ChatRoom, Order, Product, ProviderProfile, Ritual, User, WalletEntry } from "../models/index.js";

const astrologers = [
  {
    kind: "astrologer",
    name: "Dr. Neha Joshi",
    slug: "dr-neha-joshi",
    expertise: ["Vedic", "Numerology"],
    languages: ["Hindi", "English"],
    experienceYears: 8,
    rating: 4.8,
    reviewCount: 210,
    ratePerMinute: 70,
    image: "/images/home/astrologer-neha.png",
    isOnline: true,
  },
  {
    kind: "astrologer",
    name: "Acharya Vikram Sharma",
    slug: "acharya-vikram-sharma",
    expertise: ["Vedic", "KP Astrology"],
    languages: ["Hindi"],
    experienceYears: 10,
    rating: 4.6,
    reviewCount: 180,
    ratePerMinute: 60,
    image: "/images/home/astrologer-vikram.png",
    isOnline: true,
  },
  {
    kind: "astrologer",
    name: "Pandit Raghav Shastri",
    slug: "pandit-raghav-shastri",
    expertise: ["Vedic", "Astrology"],
    languages: ["Hindi"],
    experienceYears: 15,
    rating: 4.7,
    reviewCount: 160,
    ratePerMinute: 60,
    image: "/images/home/astrologer-raghav.png",
    isOnline: true,
  },
  {
    kind: "astrologer",
    name: "Astro Meera Iyer",
    slug: "astro-meera-iyer",
    expertise: ["Vedic", "Numerology"],
    languages: ["English", "Hindi"],
    experienceYears: 12,
    rating: 4.7,
    reviewCount: 85,
    ratePerMinute: 80,
    image: "/images/home/astrologer-neha.png",
    isOnline: false,
  },
];

const pandits = [
  {
    kind: "pandit",
    name: "Pandit Mohan Shastri",
    slug: "pandit-mohan-shastri",
    expertise: ["Griha Pravesh", "Vastu Puja"],
    languages: ["Hindi", "Sanskrit"],
    experienceYears: 10,
    rating: 4.8,
    reviewCount: 120,
    basePrice: 1100,
    image: "/images/home/astrologer-vikram.png",
    city: "Jaipur, Rajasthan",
    distanceKm: 2.1,
    isOnline: true,
  },
  {
    kind: "pandit",
    name: "Pandit Ramesh Tiwari",
    slug: "pandit-ramesh-tiwari",
    expertise: ["All Rituals"],
    languages: ["Hindi"],
    experienceYears: 15,
    rating: 4.9,
    reviewCount: 95,
    basePrice: 1500,
    image: "/images/home/astrologer-raghav.png",
    city: "Jaipur, Rajasthan",
    distanceKm: 3.4,
    isOnline: true,
  },
  {
    kind: "pandit",
    name: "Pandit Sandeep Joshi",
    slug: "pandit-sandeep-joshi",
    expertise: ["Puja", "Havan"],
    languages: ["Hindi", "Sanskrit"],
    experienceYears: 8,
    rating: 4.7,
    reviewCount: 76,
    basePrice: 900,
    image: "/images/home/astrologer-neha.png",
    city: "Jaipur, Rajasthan",
    distanceKm: 4.2,
    isOnline: true,
  },
];

const rituals = [
  ["Griha Pravesh Puja", "griha-pravesh-puja", "Daily Puja", "Significance, vidhi and benefits", "/images/home/puja-griha-pravesh.png", 1100],
  ["Satyanarayan Puja", "satyanarayan-puja", "Daily Puja", "Vidhi, katha, samagri and benefits", "/images/home/puja-satyanarayan.png", 1100],
  ["Rudrabhishek Puja", "rudrabhishek-puja", "Graha Shanti", "Vidhi, samagri and benefits", "/images/home/puja-rudrabhishek.png", 2100],
  ["Mundan Sanskar", "mundan-sanskar", "Sanskar Rituals", "Vidhi, importance and benefits", "", 1500],
  ["Navgraha Shanti Puja", "navgraha-shanti-puja", "Graha Shanti", "Vidhi, samagri and benefits", "/images/home/puja-navgraha.png", 2100],
  ["Vastu Shanti Puja", "vastu-shanti-puja", "Vastu Puja", "For home, office and property", "", 2100],
];

const products = [
  ["Puja Thali Set", "puja-thali-set", "Puja Samagri", "Brass", 699, 999, "thali"],
  ["5 Mukhi Rudraksha", "5-mukhi-rudraksha", "Rudraksha", "Original", 499, 799, "rudraksha"],
  ["Shree Yantra", "shree-yantra", "Yantra", "Brass", 1299, 1599, "yantra"],
  ["Tulsi Mala", "tulsi-mala", "Mala", "108 Beads", 299, 399, "mala"],
];

async function seed() {
  await connectDb();
  await Promise.all([
    User.deleteMany({}),
    ProviderProfile.deleteMany({}),
    Ritual.deleteMany({}),
    Product.deleteMany({}),
    Booking.deleteMany({}),
    Order.deleteMany({}),
    WalletEntry.deleteMany({}),
    ChatRoom.deleteMany({}),
    ChatMessage.deleteMany({}),
    CallSession.deleteMany({}),
  ]);

  const passwordHash = await bcrypt.hash("password123", 10);
  const customer = await User.create({ name: "Rahul Sharma", email: "rahul@example.com", phone: "+919876543210", roles: ["customer"], passwordHash });
  await User.create({ name: "Admin", email: "admin@dharmagya.com", roles: ["admin"], passwordHash });
  await ProviderProfile.insertMany([...astrologers, ...pandits]);
  await Ritual.insertMany(rituals.map(([title, slug, category, description, image, price]) => ({ title, slug, category, description, image, price })));
  await Product.insertMany(products.map(([title, slug, category, detail, price, oldPrice, visual]) => ({ title, slug, category, detail, price, oldPrice, visual })));
  await WalletEntry.create({ user: customer._id, type: "credit", amount: 500, reason: "seed_balance" });

  console.log("Seeded Dharmagya demo data.");
  console.log("Demo login: rahul@example.com / password123");
  await disconnectDb();
}

seed().catch(async (error) => {
  console.error(error);
  await disconnectDb();
  process.exit(1);
});
