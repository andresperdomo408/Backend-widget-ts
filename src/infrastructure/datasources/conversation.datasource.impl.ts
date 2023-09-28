import { ChatMessagesModel } from "../../data/mongodb";
import { ConversationModel } from "../../data/mongodb/models/conversation.model";
import { CreateConversationDto, CustomError, ChatMessagesEntity, ConversationEntity } from "../../domain";
import { ConversationDataSource } from "../../domain/datasources/conversation.datasource";
import { GetByIDConversationDto } from "../../domain/dtos/conversation/get-conversation.dto";
import { UpdateConversationDto } from "../../domain/dtos/conversation/update-conversation.dto";
import { RemoveByIDConversationDto } from "../../domain/dtos/conversation/remove-conversation.dto";
import { ConversationMapper } from "../mappers/conversation.mapper";

export class ConversationDataSourceImpl implements ConversationDataSource {
  async update(updateConversationDto: UpdateConversationDto): Promise<ChatMessagesEntity> {
    const { _id, text, from = "bot", image = "", name = "", icon = "", file = "" } = updateConversationDto;
    try {
      const chatMessages = await ChatMessagesModel.findById(_id);
      if (!chatMessages) throw CustomError.badRequest("Chat Messages not exists");
      const newConversation: any = new ConversationModel({
        text,
        from,
        image,
        name,
        icon,
        file,
      });
      if (!newConversation) throw CustomError.notFound("Conversation not found");
      await newConversation.save();
      chatMessages.conversation = [...chatMessages.conversation, newConversation];
      await chatMessages.save();
      return ConversationMapper.conversationEntityFromObject(chatMessages);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async create(createConversationDto: CreateConversationDto): Promise<ChatMessagesEntity> {
    const { name } = createConversationDto;
    try {
      const chatMessages = await ChatMessagesModel.create({
        name,
      });
      await chatMessages.save();
      return ConversationMapper.conversationEntityFromObject(chatMessages);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async getByID(getByIDConversationDto: GetByIDConversationDto): Promise<ChatMessagesEntity> {
    const { _id } = getByIDConversationDto;
    try {
      const chatMessages = await ChatMessagesModel.findById(_id).populate("conversation");
      if (!chatMessages) throw CustomError.badRequest("Chat Messages not exists");

      return ConversationMapper.conversationEntityFromObject(chatMessages);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
  async removeByID(removeByIDConversationDto: RemoveByIDConversationDto): Promise<void> {
    const { _id } = removeByIDConversationDto;
    console.log(_id);
    try {
      // Encuentra la conversación que deseas eliminar por su _id
      const chatMessages = await ChatMessagesModel.findOne({ _id });

      if (!chatMessages) {
        throw CustomError.notFound("Conversation not found");
      }

      // Elimina la conversación de la base de datos
      await chatMessages.deleteOne();
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
