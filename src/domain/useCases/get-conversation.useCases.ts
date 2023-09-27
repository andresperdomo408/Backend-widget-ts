import { ConversationRepository } from "../repositories/conversation.repository";
import { GetByIDConversationDto } from "../dtos/conversation/get-conversation.dto";

export class GetByIDConversation {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  async execute(getByIDConversationDto: GetByIDConversationDto) {
    return await this.conversationRepository.getByID(getByIDConversationDto);
  }
}
