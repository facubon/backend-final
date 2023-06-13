import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const productRouter = Router();

// RUTA GET
productRouter.get("/:id?", ProductController.getProducts);

// RUTA GET
productRouter.get(
  "/category/:category",
  ProductController.getProductsByCategoryName
);

// RUTA POST
productRouter.post("/", ProductController.createProduct);

// RUTA PUT
productRouter.put("/:id", ProductController.updateProduct);

// RUTA DELETE
productRouter.delete("/:id", ProductController.deleteProductById);

export default productRouter;
