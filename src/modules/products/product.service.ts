import { object } from "zod";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";
// product create
const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};
// get all products
const getAllProduct = async (searchTerm: string | undefined) => {
  searchTerm ? { searchTerm } : {};

  //$regex logic apply search
  const result = await Product.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  return result;
};
// get  product by id
const getProductById = async (id: string) => {
  const result = await Product.findOne({ _id: id });
  return result;
};
// update   product by id
const updateProduct = async (id: string, data: TProduct) => {
  console.log(id);
  const result = await Product.updateOne({ _id: id }, { $set: data });

  return result;
};

// product delete
const deleteProduct = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
