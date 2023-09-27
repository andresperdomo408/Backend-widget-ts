import { Server as SocketIOServer, Socket } from "socket.io";
import { UpdateConversationDto } from "../../domain/dtos/conversation/update-conversation.dto";
import { UpdateConversation } from "../../domain/useCases/update-conversation.useCases";
import { ConversationDataSourceImpl } from "../datasources/conversation.datasource.impl";
import { ConversationRepositoryImpl } from "../repositories/conversation.repository.impl";

export class Sockets {
  private io: SocketIOServer;

  constructor(io: SocketIOServer) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    const datasource = new ConversationDataSourceImpl();
    const conversationRepository = new ConversationRepositoryImpl(datasource);

    // On connection
    this.io.on("connection", (socket: Socket) => {
      console.log("Un cliente se ha conectado");
      // Socket chat-message
      socket.on("chat-message", (message) => {
        const [error, updateConversationDto] = UpdateConversationDto.update(message);
        new UpdateConversation(conversationRepository)
          .execute(updateConversationDto!)
          .then((chat) => {
            if (message.from !== "bot") {
              socket.emit("chat-message-response", `Su conversacion fue actualizada`);
            }
          })
          .catch((error) => socket.emit("chat-message-response", "Hubo un error"));
      });

      // Socket Disconnect
      socket.on("disconnect", () => {
        console.log("Un usuario se ha desconectado");
      });
    });
  }
}
