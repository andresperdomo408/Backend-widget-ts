import mongoose, { Schema } from "mongoose";

const conversationSchema = new Schema(
  {
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    from: {
      type: String,
      default: "bot",
    },
    icon: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  { timestamps: true }
);

export const ConversationModel = mongoose.model("Conversation", conversationSchema);
