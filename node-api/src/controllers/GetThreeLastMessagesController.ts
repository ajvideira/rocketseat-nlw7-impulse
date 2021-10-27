import { Request, Response } from 'express';
import { GetLastThreeMessagesService } from '../services/GetLastThreeMessagesService';

export class GetThreeLastMessagesController {
  async handle(_: Request, response: Response) {
    const service = new GetLastThreeMessagesService();
    const messages = await service.execute();

    return response.json(messages);
  }
}
