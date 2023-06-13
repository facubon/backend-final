import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import upload from "../config/multer.js";
import loginMiddleware from "../middleware/login.middleware.js";

const authRouter = Router();

// RUTA GET
authRouter.get("/login", UserController.renderLoginView);

// RUTA POST]
authRouter.post("/login", loginMiddleware);

// RUTA GET
authRouter.get("/logout", UserController.logout);

// RUTA GET
authRouter.get("/register", UserController.renderRegisterView);

// RUTA POST
authRouter.post("/register", upload.single("image"), UserController.createUser);

export default authRouter;
