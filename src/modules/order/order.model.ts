import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  email: { type: "string", required: [true, "email is required"] },
  productId: { type: "string", required: [true, "productId is required"] },
  price: { type: "number", required: [true, "price is required"] },
  quantity: { type: "number", required: [true, "quantity is required"] },
});

export const Order = model<TOrder>("Order", orderSchema);
