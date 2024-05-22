import { z } from "zod";

const variantSchema = z.object({
  type: z.string({ message: "type must be a string" }),
  value: z.string({ message: "value must be a string" }).nonempty(),
});

// Define Zod schema for Inventory
const inventorySchema = z.object({
  quantity: z
    .number({ message: "quantity must be a number " })
    .int()
    .nonnegative(),
  inStock: z.boolean({ message: "inStock must be a boolean" }),
});

// Define Zod schema for Product
const productValidationZosSchema = z.object({
  name: z.string({ message: " name must be string data" }),
  description: z.string({ message: "description must be a string" }).nonempty(),
  price: z.number({ message: " price must be a number" }).nonnegative(),
  category: z.string({ message: "category must be a string" }).nonempty(),
  tags: z
    .array(z.string({ message: " tags must be a array of string" }).nonempty())
    .nonempty(),
  variants: z.array(variantSchema).nonempty(),
  inventory: inventorySchema,
});

export default productValidationZosSchema;
