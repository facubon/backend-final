import { Router } from "express";
import MessageController from "../controllers/message.controller.js";

const messageRouter = Router();

// RUTA GET
messageRouter.get("/", MessageController.getAllMessages);

// RUTA GET
messageRouter.get("/user/:id", MessageController.getMessagesByUserId);

// RUTA POST
messageRouter.post("/", MessageController.createMessage);

// RUTA POST
messageRouter.post("/:id/reply", MessageController.addReplyToMessageById);









// POST
/* messageRouter.post(
  "/user/:user_id/consulta/:message_id/delete",
  MessageController.deleteMessageById
); */

export default messageRouter;
