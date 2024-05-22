import { Request, Response } from "express";
import { OrderService } from "./order.service";
import OrderValidationSchema from "./order.validation.zod";
import { Product } from "../products/product.model";

// order create
const orderCreate = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const OrderValidation = OrderValidationSchema.parse(orderData);
    const { error } = req.body;
    if (error)
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });

    const product = await Product.findById(req.body.productId);
    if (!product)
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });

    if (product.inventory.quantity < req.body.quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }

    //=====================

    // zod validation

    const result = await OrderService.orderCreate(OrderValidation);
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: `${error.message} | "something went wrong"`,
      error: error,
    });
  }
};
// get all orders

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    const result = await OrderService.getAllOrders(email as string);
    console.log(result);

    if (email || typeof email === "string") {
      return res.status(200).json({
        success: false,
        message: "order fetch successfully for email",
        data: result,
      });
    }

    if (!email || typeof email !== "string") {
      res.status(200).json({
        success: true,
        message: "order fetched successfully",
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: `${error.message} | "something went wrong"`,
      error: error,
    });
  }
};

// get  orders email

export const OrderController = {
  orderCreate,
  getAllOrders,
};
