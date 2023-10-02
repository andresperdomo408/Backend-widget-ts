import { Router } from "express";
import { ChatBotWizardController } from "./controller";
import { Server as SocketIOServer, Socket } from "socket.io";

export class ChatBotWizardRoutes {
  static io: SocketIOServer;

  constructor(io: SocketIOServer) {
    ChatBotWizardRoutes.io = io;
  }

  static get routes(): Router {
    const router = Router();
    const controller = new ChatBotWizardController();

    router.post("/input", controller.sendInputChatBotWizard);
    return router;
  }
}
