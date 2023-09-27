import { Router } from "express";
import { ConversationRoutes } from "./conversation";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();
    router.use("/conversation", ConversationRoutes.routes);
    return router;
  }
}
