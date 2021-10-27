import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

export class CrateMessageController {
  async handle(request: Request, response: Response) {
    const { text } = request.body;

    if (!text) {
      return response.status(400).json({
        error: 'Missing text',
      });
    }

    const service = new CreateMessageService();
    const message = await service.execute(text, request.user_id);

    return response.json(message);
  }
}
