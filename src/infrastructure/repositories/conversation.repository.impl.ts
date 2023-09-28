import { ChatMessagesEntity, ConversationEntity, ConversationRepository, CreateConversationDto } from "../../domain";
import { ConversationDataSource } from "../../domain/datasources/conversation.datasource";
import { GetByIDConversationDto } from "../../domain/dtos/conversation/get-conversation.dto";
import { UpdateConversationDto } from "../../domain/dtos/conversation/update-conversation.dto";
import { RemoveByIDConversationDto } from "../../domain/dtos/conversation/remove-conversation.dto";

export class ConversationRepositoryImpl implements ConversationRepository {
  constructor(private readonly conversationDataSource: ConversationDataSource) {}
  update(updateConversationDto: UpdateConversationDto): Promise<ChatMessagesEntity> {
    return this.conversationDataSource.update(updateConversationDto);
  }
  create(createConversationDto: CreateConversationDto): Promise<ChatMessagesEntity> {
    return this.conversationDataSource.create(createConversationDto);
  }
  getByID(getByIDConversationDto: GetByIDConversationDto): Promise<ChatMessagesEntity> {
    return this.conversationDataSource.getByID(getByIDConversationDto);
  }
  removeByID(removeByIDConversationDto: RemoveByIDConversationDto): Promise<ChatMessagesEntity> {
    return this.conversationDataSource.getByID(removeByIDConversationDto);
  }
  
}
