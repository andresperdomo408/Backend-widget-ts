import mongoose, { Schema } from "mongoose";

const chatMessagesSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    conversation: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conversation",
      },
    ],
  },
  { timestamps: true }
);

export const ChatMessagesModel = mongoose.model("ChatMessage", chatMessagesSchema);
