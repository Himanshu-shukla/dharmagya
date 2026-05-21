import bcrypt from "bcryptjs";
import mongoose, { Schema, Types } from "mongoose";

export type Role = "customer" | "astrologer" | "pandit" | "admin";

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    passwordHash: { type: String, required: true },
    roles: [{ type: String, enum: ["customer", "astrologer", "pandit", "admin"], default: "customer" }],
  },
  { timestamps: true },
);

UserSchema.methods.comparePassword = function comparePassword(password: string) {
  return bcrypt.compare(password, this.passwordHash);
};

export const User = mongoose.models.User || mongoose.model("User", UserSchema);

const ProviderProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    kind: { type: String, enum: ["astrologer", "pandit"], required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    expertise: [{ type: String }],
    languages: [{ type: String }],
    experienceYears: { type: Number, default: 0 },
    rating: { type: Number, default: 4.5 },
    reviewCount: { type: Number, default: 0 },
    ratePerMinute: { type: Number, default: 0 },
    basePrice: { type: Number, default: 0 },
    image: { type: String },
    city: { type: String },
    distanceKm: { type: Number },
    isOnline: { type: Boolean, default: true },
    bio: { type: String },
  },
  { timestamps: true },
);

export const ProviderProfile =
  mongoose.models.ProviderProfile || mongoose.model("ProviderProfile", ProviderProfileSchema);

const RitualSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    icon: { type: String },
    price: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Ritual = mongoose.models.Ritual || mongoose.model("Ritual", RitualSchema);

const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    detail: { type: String },
    price: { type: Number, required: true },
    oldPrice: { type: Number },
    visual: { type: String },
    image: { type: String },
    stock: { type: Number, default: 25 },
  },
  { timestamps: true },
);

export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

const BookingSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    provider: { type: Schema.Types.ObjectId, ref: "ProviderProfile", required: true },
    ritual: { type: Schema.Types.ObjectId, ref: "Ritual" },
    type: { type: String, enum: ["pandit", "puja"], required: true },
    status: { type: String, enum: ["pending", "confirmed", "completed", "cancelled"], default: "pending" },
    city: { type: String },
    scheduledFor: { type: Date },
    notes: { type: String },
    totalAmount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Booking = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

const OrderSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        quantity: { type: Number, min: 1, default: 1 },
        price: { type: Number, required: true },
      },
    ],
    status: { type: String, enum: ["created", "paid", "packed", "shipped", "delivered", "cancelled"], default: "created" },
    totalAmount: { type: Number, required: true },
  },
  { timestamps: true },
);

export const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

const WalletEntrySchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["credit", "debit"], required: true },
    amount: { type: Number, required: true },
    reason: { type: String, required: true },
    referenceType: { type: String },
    referenceId: { type: Schema.Types.ObjectId },
  },
  { timestamps: true },
);

export const WalletEntry = mongoose.models.WalletEntry || mongoose.model("WalletEntry", WalletEntrySchema);

const ChatRoomSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    provider: { type: Schema.Types.ObjectId, ref: "ProviderProfile", required: true },
    status: { type: String, enum: ["active", "ended"], default: "active" },
    ratePerMinute: { type: Number, default: 0 },
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
  },
  { timestamps: true },
);

export const ChatRoom = mongoose.models.ChatRoom || mongoose.model("ChatRoom", ChatRoomSchema);

const ChatMessageSchema = new Schema(
  {
    room: { type: Schema.Types.ObjectId, ref: "ChatRoom", required: true },
    sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
    senderRole: { type: String, enum: ["customer", "astrologer", "pandit", "admin"], required: true },
    type: { type: String, enum: ["text", "audio"], default: "text" },
    text: { type: String },
    readBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true },
);

export const ChatMessage = mongoose.models.ChatMessage || mongoose.model("ChatMessage", ChatMessageSchema);

const CallSessionSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    provider: { type: Schema.Types.ObjectId, ref: "ProviderProfile", required: true },
    status: { type: String, enum: ["ringing", "accepted", "rejected", "ended"], default: "ringing" },
    ratePerMinute: { type: Number, default: 0 },
    startedAt: { type: Date },
    endedAt: { type: Date },
    durationSeconds: { type: Number, default: 0 },
    billedAmount: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const CallSession = mongoose.models.CallSession || mongoose.model("CallSession", CallSessionSchema);

export function toObjectId(id: string) {
  if (!Types.ObjectId.isValid(id)) {
    throw Object.assign(new Error("Invalid id"), { status: 400 });
  }
  return new Types.ObjectId(id);
}
