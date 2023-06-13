import { Router } from "express";
import CartController from "../controllers/cart.controller.js";

const cartRouter = Router();

// RUTA GET
cartRouter.get("/:id/products", CartController.getProductsByCartId);

// RUTA POST
cartRouter.post("/", CartController.createCart);

// RUTA POST
cartRouter.post("/:id/products/:id_prod", CartController.createProductOfACart);

// RUTA DELETE
cartRouter.post("/:id/delete", CartController.deleteCartById);

// RUTA DELETE
cartRouter.post(
  "/:id/products/:id_prod/delete",
  CartController.deleteProductById
);

export default cartRouter;
