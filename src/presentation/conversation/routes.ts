import { Router } from "express";
import { ConversationController } from "./controller";
import { ConversationDataSourceImpl, ConversationRepositoryImpl } from "../../infrastructure";

export class ConversationRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new ConversationDataSourceImpl();
    const conversationRepository = new ConversationRepositoryImpl(datasource);
    const controller = new ConversationController(conversationRepository);

    router.post("/", controller.createConversation);
    router.get("/get-conversation/:_id", controller.getByIDConversation);
    router.delete("/delete-conversation/:_id", controller.removeByIDConversation);
    return router;
  }
}
