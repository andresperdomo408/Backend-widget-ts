import { Router } from "express";
import { ConversationRoutes } from "./conversation";
import { ChatBotWizardRoutes } from "./chatBotWizard";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/conversation", ConversationRoutes.routes);
    router.use("/chat-bot-wizard", ChatBotWizardRoutes.routes);
    return router;
  }
}
