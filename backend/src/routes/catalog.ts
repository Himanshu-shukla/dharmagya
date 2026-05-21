import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth.js";
import { validateBody } from "../middleware/validate.js";
import { Booking, Order, Product, ProviderProfile, Ritual, toObjectId } from "../models/index.js";

export const catalogRouter = Router();

catalogRouter.get("/astrologers", async (req, res) => {
  const filter: Record<string, unknown> = { kind: "astrologer" };
  if (req.query.online === "true") filter.isOnline = true;
  if (typeof req.query.language === "string") filter.languages = req.query.language;
  if (typeof req.query.expertise === "string") filter.expertise = req.query.expertise;
  const providers = await ProviderProfile.find(filter).sort({ isOnline: -1, rating: -1 }).lean();
  res.json({ astrologers: providers.map(providerDto) });
});

catalogRouter.get("/astrologers/:id", async (req, res, next) => {
  try {
    const provider = await ProviderProfile.findOne({ _id: toObjectId(req.params.id), kind: "astrologer" }).lean();
    if (!provider) throw Object.assign(new Error("Astrologer not found"), { status: 404 });
    res.json({ astrologer: providerDto(provider) });
  } catch (error) {
    next(error);
  }
});

catalogRouter.get("/pandits", async (req, res) => {
  const filter: Record<string, unknown> = { kind: "pandit" };
  if (typeof req.query.city === "string") filter.city = new RegExp(req.query.city, "i");
  const providers = await ProviderProfile.find(filter).sort({ distanceKm: 1, rating: -1 }).lean();
  res.json({ pandits: providers.map(providerDto) });
});

catalogRouter.get("/pandits/:id", async (req, res, next) => {
  try {
    const provider = await ProviderProfile.findOne({ _id: toObjectId(req.params.id), kind: "pandit" }).lean();
    if (!provider) throw Object.assign(new Error("Pandit not found"), { status: 404 });
    res.json({ pandit: providerDto(provider) });
  } catch (error) {
    next(error);
  }
});

catalogRouter.get("/rituals", async (req, res) => {
  const filter = typeof req.query.category === "string" ? { category: req.query.category } : {};
  const rituals = await Ritual.find(filter).sort({ category: 1, title: 1 }).lean();
  res.json({ rituals: rituals.map(withId), categories: [...new Set(rituals.map((ritual) => ritual.category))] });
});

catalogRouter.get("/products", async (req, res) => {
  const filter = typeof req.query.category === "string" ? { category: req.query.category } : {};
  const products = await Product.find(filter).sort({ title: 1 }).lean();
  res.json({ products: products.map(withId), categories: [...new Set(products.map((product) => product.category))] });
});

const BookingSchema = z.object({
  providerId: z.string(),
  ritualId: z.string().optional(),
  type: z.enum(["pandit", "puja"]),
  city: z.string().optional(),
  scheduledFor: z.string().datetime().optional(),
  notes: z.string().optional(),
});

catalogRouter.post("/bookings", requireAuth, validateBody(BookingSchema), async (req, res, next) => {
  try {
    const provider = await ProviderProfile.findById(req.body.providerId);
    if (!provider) throw Object.assign(new Error("Provider not found"), { status: 404 });
    const ritual = req.body.ritualId ? await Ritual.findById(req.body.ritualId) : null;
    const totalAmount = provider.basePrice || ritual?.price || 0;

    const booking = await Booking.create({
      customer: req.user!.id,
      provider: provider._id,
      ritual: ritual?._id,
      type: req.body.type,
      city: req.body.city,
      scheduledFor: req.body.scheduledFor ? new Date(req.body.scheduledFor) : undefined,
      notes: req.body.notes,
      totalAmount,
    });

    res.status(201).json({ booking: withId(booking.toObject()) });
  } catch (error) {
    next(error);
  }
});

catalogRouter.get("/bookings", requireAuth, async (req, res) => {
  const bookings = await Booking.find({ customer: req.user!.id }).populate("provider ritual").sort({ createdAt: -1 }).lean();
  res.json({ bookings: bookings.map(withId) });
});

const OrderSchema = z.object({
  items: z.array(z.object({ productId: z.string(), quantity: z.number().int().positive().default(1) })).min(1),
});
type OrderBody = z.infer<typeof OrderSchema>;
type OrderItem = { product: unknown; quantity: number; price: number };

catalogRouter.post("/orders", requireAuth, validateBody(OrderSchema), async (req, res, next) => {
  try {
    const body = req.body as OrderBody;
    const productIds = body.items.map((item) => item.productId);
    const products = await Product.find({ _id: { $in: productIds } });
    const orderItems: OrderItem[] = body.items.map((item) => {
      const product = products.find((candidate) => String(candidate._id) === item.productId);
      if (!product) throw Object.assign(new Error(`Product not found: ${item.productId}`), { status: 404 });
      return { product: product._id, quantity: item.quantity, price: product.price };
    });
    const totalAmount = orderItems.reduce((sum: number, item: OrderItem) => sum + item.price * item.quantity, 0);
    const order = await Order.create({ customer: req.user!.id, items: orderItems, totalAmount });
    res.status(201).json({ order: withId(order.toObject()) });
  } catch (error) {
    next(error);
  }
});

function withId<T extends { _id?: unknown }>(doc: T) {
  return { ...doc, id: String(doc._id), _id: undefined };
}

type ProviderRecord = {
  _id?: unknown;
  ratePerMinute?: number;
  basePrice?: number;
  rating?: number;
  reviewCount?: number;
  experienceYears?: number;
  languages?: string[];
  [key: string]: unknown;
};

function providerDto(provider: ProviderRecord) {
  return {
    ...withId(provider),
    priceLabel: provider.ratePerMinute ? `Rs ${provider.ratePerMinute}/min` : `Rs ${provider.basePrice}`,
    ratingLabel: `${provider.rating} (${provider.reviewCount})`,
    details: `${provider.experienceYears}+ Years Exp. - ${(provider.languages ?? []).join(", ")}`,
  };
}
