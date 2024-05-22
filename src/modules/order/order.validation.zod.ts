import { z } from "zod";

const OrderValidationSchema = z.object({
  email: z.string({ message: "please valid email" }).email(),
  productId: z.string({ message: "please valid productId in your product" }),
  price: z.number({ message: "price must be number" }).positive(),
  quantity: z.number().int().positive(),
});
export default OrderValidationSchema;
