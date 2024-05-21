import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const orderCreate = async (orderData: TOrder) => {
  const result = await Order.create(orderData);
  return result;
};
// get all data
const getAllOrders = async (email: string) => {
  const query = email ? { email } : {};
  const result = await Order.find(query);
  return result;
};
// get oder  by email

export const OrderService = {
  orderCreate,
  getAllOrders,
};
