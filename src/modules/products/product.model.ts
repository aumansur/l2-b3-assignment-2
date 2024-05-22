import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.interface";

// const userSchema = new Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   avatar: String,
// });

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});
const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: { type: inventorySchema, required: true },
});
productSchema.post("save", function (doc, next) {
  // console.log(this, 'post hook: we  save our data')
  next();
});
export const Product = model<TProduct>("Product", productSchema);
