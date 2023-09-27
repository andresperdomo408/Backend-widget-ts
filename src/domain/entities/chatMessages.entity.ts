import { ConversationEntity } from "./conversation.entity";
import { Types } from "mongoose";

export class ChatMessagesEntity {
  constructor(
    public _id: Types.ObjectId,
    public name: String,
    public conversation: ConversationEntity[],
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}
