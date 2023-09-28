import { Types } from "mongoose";

export class ConversationEntity {
  constructor(
    public _id: Types.ObjectId,
    public text?: string,
    public image?: File | string,
    public name?: string,
    public from?: String,
    public icon?: string,
    public file?: File | string
  ) {}
}
