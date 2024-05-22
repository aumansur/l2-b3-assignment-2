import { TProduct } from "./product.interface";
import { Product } from "./product.model";
// product create
const createProduct = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};
// get all products

const getAllProduct = async (searchTerm: string) => {
  //eslint-disable-next-line
  const filter: any = {};
  if (searchTerm) {
    filter.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
    ];
  }
  const result = await Product.find(filter);
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
