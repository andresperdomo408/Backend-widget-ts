import type { Request, Response } from "express";
import { CreateConversationDto } from "../../domain/dtos/conversation/create-conversation.dto";
import { ConversationRepository } from "../../domain/repositories/conversation.repository";
import { CustomError } from "../../domain";
import { CreateConversation } from "../../domain/useCases/create-conversation.useCases";
import { GetByIDConversationDto } from "../../domain/dtos/conversation/get-conversation.dto";
import { RemoveByIDConversationDto } from "../../domain/dtos/conversation/remove-conversation.dto";
import { GetByIDConversation } from "../../domain/useCases/get-conversation.useCases";
import { RemoveByIDConversation } from "../../domain/useCases/remove-coversation.useCase";

export class ConversationController {
  constructor(private readonly conversationRepository: ConversationRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error" });
  };

  createConversation = async (req: Request, res: Response) => {
    const [error, createConversationDto] = CreateConversationDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateConversation(this.conversationRepository)
      .execute(createConversationDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };

  getByIDConversation = async (req: Request, res: Response) => {
    const [error, getByIDConversationDto] = GetByIDConversationDto.getByID(req.params);
    if (error) return res.status(400).json({ error });

    new GetByIDConversation(this.conversationRepository)
      .execute(getByIDConversationDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };
  removeByIDConversation = async (req: Request, res: Response) => {
    const [error, removeByIDConversationDto] = RemoveByIDConversationDto.removeByID(req.params);
    if (error) return res.status(400).json({ error });

    new RemoveByIDConversation(this.conversationRepository)
      .execute(removeByIDConversationDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };
}
