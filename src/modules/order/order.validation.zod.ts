import { z } from "zod";

const OrderValidationSchema = z.object({
  email: z.string().email(),
  productId: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});
export default OrderValidationSchema;
