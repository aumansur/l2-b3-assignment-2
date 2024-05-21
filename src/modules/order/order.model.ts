import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
  email: { type: "string", required: true },
  productId: { type: "string", required: true },
  price: { type: "number", required: true },
  quantity: { type: "number", required: true },
});

export const Order = model<TOrder>("Order", orderSchema);
