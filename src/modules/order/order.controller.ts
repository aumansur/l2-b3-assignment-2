import { Request, Response } from "express";
import { OrderService } from "./order.service";
import OrderValidationSchema from "./order.validation.zod";
// order create
const orderCreate = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    // zod validation
    const OrderValidation = OrderValidationSchema.parse(orderData);
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

    // if (!email || typeof email !== "string") {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Invalid email format",
    //   });
    // }
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
