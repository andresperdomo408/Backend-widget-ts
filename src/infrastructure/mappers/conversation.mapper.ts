import { ChatMessagesEntity, CustomError } from "../../domain";

export class ConversationMapper {
  static conversationEntityFromObject(object: { [key: string]: any }) {
    const { _id, name, conversation, createdAt, updatedAt } = object;
    if (!name) throw CustomError.badRequest("Missing name");
    return new ChatMessagesEntity(_id, name, conversation, createdAt, updatedAt);
  }
}
