import express from "express";

import { OrderController } from "./order.controller";
const router = express.Router();

router.post("/", OrderController.orderCreate);
router.get("/", OrderController.getAllOrders);

export const OrderRouter = router;
