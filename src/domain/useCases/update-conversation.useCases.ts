import { UpdateConversationDto } from "../dtos/conversation/update-conversation.dto";
import { ConversationRepository } from "../repositories/conversation.repository";

export class UpdateConversation {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async execute(updateConversationDto: UpdateConversationDto) {
    return await this.conversationRepository.update(updateConversationDto);
  }
}
