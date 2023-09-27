import { CreateConversationDto } from "../dtos/conversation/create-conversation.dto";
import { ConversationRepository } from "../repositories/conversation.repository";

export class CreateConversation {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async execute(createConversationDto: CreateConversationDto) {
    return await this.conversationRepository.create(createConversationDto);
  }
}
