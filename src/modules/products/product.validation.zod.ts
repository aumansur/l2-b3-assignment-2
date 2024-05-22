import { z } from "zod";

const variantSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
});

// Define Zod schema for Inventory
const inventorySchema = z.object({
  quantity: z.number().int().nonnegative(),
  inStock: z.boolean(),
});

// Define Zod schema for Product
const productValidationZosSchema = z.object({
  name: z.string({ message: " name must be string data" }),
  description: z.string().nonempty(),
  price: z.number().nonnegative(),
  category: z.string().nonempty(),
  tags: z.array(z.string().nonempty()).nonempty(),
  variants: z.array(variantSchema).nonempty(),
  inventory: inventorySchema,
});

export default productValidationZosSchema;
