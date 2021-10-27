import { io } from '../app';
import { prismaClient } from '../prisma';

export class CreateMessageService {
  async execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id,
      },
      include: {
        user: true,
      },
    });

    io.emit('new_message', {
      text: message.text,
      created_at: message.created_at,
      user: {
        id: message.user.id,
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    });

    return message;
  }
}
