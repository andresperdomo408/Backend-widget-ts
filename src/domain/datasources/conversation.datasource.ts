import { CreateConversationDto } from "../dtos/conversation/create-conversation.dto";
import { ChatMessagesEntity } from "../entities/chatMessages.entity";
import { UpdateConversationDto } from "../dtos/conversation/update-conversation.dto";
import { GetByIDConversationDto } from "../dtos/conversation/get-conversation.dto";

export abstract class ConversationDataSource {
  abstract create(createConversationDto: CreateConversationDto): Promise<ChatMessagesEntity>;
  abstract update(updateConversationDto: UpdateConversationDto): Promise<ChatMessagesEntity>;
  abstract getByID(getByIDConversationDto: GetByIDConversationDto): Promise<ChatMessagesEntity>;
}
