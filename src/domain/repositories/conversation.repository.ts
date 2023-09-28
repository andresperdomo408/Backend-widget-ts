import { CreateConversationDto } from "../dtos/conversation/create-conversation.dto";
import { ChatMessagesEntity } from "../entities/chatMessages.entity";
import { UpdateConversationDto } from "../dtos/conversation/update-conversation.dto";
import { GetByIDConversationDto } from "../dtos/conversation/get-conversation.dto";
import { RemoveByIDConversationDto } from "../dtos/conversation/remove-conversation.dto";

export abstract class ConversationRepository {
  abstract update(updateConversationDto: UpdateConversationDto): Promise<ChatMessagesEntity>;
  abstract create(createConversationDto: CreateConversationDto): Promise<ChatMessagesEntity>;
  abstract getByID(getByIDConversationDto: GetByIDConversationDto): Promise<ChatMessagesEntity>;
  abstract removeByID(removeByIDConversationDto: RemoveByIDConversationDto): Promise<ChatMessagesEntity>;
}

