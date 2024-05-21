import { Request, Response } from "express";
import { ProductService } from "./product.service";
import productValidationZosSchema from "./product.validation.zod";
import { any } from "zod";
// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    // implement validation zodpp0?: string | undefined0: string | undefined
    const zodParseData = productValidationZosSchema.parse(productData);
    const result = await ProductService.createProduct(zodParseData);
    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};
// get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductService.getAllProduct(
      searchTerm as string | undefined
    );
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};

// Retrieve specific product by ID

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};
// update  specific product by ID

const updateProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { productId } = req.params;
    const result = await ProductService.updateProduct(productId, data);
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};

// delete product const getProductById
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "something went wrong",
      error: error,
    });
  }
};
export const productController = {
  createProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
