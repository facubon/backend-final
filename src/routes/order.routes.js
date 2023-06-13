import { Router } from "express";
import OrderController from "../controllers/order.controller.js";

const orderRouter = Router();

// RUTA GET
orderRouter.get("/", OrderController.getAllOrdersByBuyerEmail);

// RUTA GET
orderRouter.get("/:id", OrderController.getOrderById);

//RUTA [POST
orderRouter.post("/", OrderController.createOrder);

export default orderRouter;
