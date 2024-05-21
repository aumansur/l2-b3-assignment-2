import express, { Request, Response } from "express";
import { ProductRouter } from "./modules/products/product.routes";
import cors from "cors";
import { OrderRouter } from "./modules/order/order.routes";
const app = express();
// json parser
app.use(express.json());
app.use(cors());

app.use(express());
app.use("/api/products", ProductRouter);
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hey  mansur your server is running 😎");
});

export default app;
