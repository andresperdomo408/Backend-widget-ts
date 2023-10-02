import { CustomError } from "../../domain";
import type { Request, Response } from "express";
import { ChatBotWizardRoutes } from "./routes";
import { Socket } from "socket.io";
import output from "../../../tests/examples/output_event.json";

export class ChatBotWizardController {
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  };

  sendInputChatBotWizard = async (req: Request, res: Response) => {
    try {
      console.log(output.body.data);
      const io = ChatBotWizardRoutes.io;
      io.on("connection", (socket: Socket) => {
        socket.emit("chat-message-response", "Por fin");
      });
    } catch (error) {
      this.handleError(error, res);
    }
  };
}
