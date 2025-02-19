import { z } from "zod";
import {
  insertProductSchema,
  insertCartSchema,
  cartItemSchema,
  shippingAddressSchema,
  insertOrderitemSchema,
  insertOrderSchema,
  paymentResultSchema,
} from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
export type OrderItem = z.infer<typeof insertOrderitemSchema>;
export type Order = z.infer<typeof insertOrderSchema> & {
  id: string;
  createdAt: Date;
  isPaid: Boolean;
  paidAt: Date | null;
  isDelivered: Boolean;
  deliveredAt: Date | null;
  orderitems: OrderItem[];
  user: { name: string; email: string };
};

export type PaymentResult = z.infer<typeof paymentResultSchema>;
