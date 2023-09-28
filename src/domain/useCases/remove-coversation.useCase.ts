import { ConversationRepository } from "../repositories/conversation.repository";
import { RemoveByIDConversationDto } from "../dtos/conversation/remove-conversation.dto";

export class RemoveByIDConversation {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async execute(removeByIDConversationDto: RemoveByIDConversationDto) {
    return await this.conversationRepository.removeByID(removeByIDConversationDto);
  }
}
