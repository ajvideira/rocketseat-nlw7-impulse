import axios from 'axios';
import { prismaClient } from '../prisma';
import { sign } from 'jsonwebtoken';

type AccessTokenResponse = {
  access_token: string;
};

type UserResponse = {
  avatar_url: string;
  id: number;
  login: string;
  name: string;
};

export class AuthenticateUserService {
  async execute(code: string) {
    const { data: accessTokenResponse } = await axios.post<AccessTokenResponse>(
      'https://github.com/login/oauth/access_token',
      null,
      {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const { data: userResponse } = await axios.get<UserResponse>(
      'https://api.github.com/user',
      {
        headers: {
          authorization: `Bearer ${accessTokenResponse.access_token}`,
        },
      }
    );

    let user = await prismaClient.user.findFirst({
      where: { github_id: userResponse.id },
    });

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          github_id: userResponse.id,
          name: userResponse.name,
          login: userResponse.login,
          avatar_url: userResponse.avatar_url,
        },
      });
    }

    const token = sign(
      {
        user: {
          name: user.name,
          avatar_url: user.avatar_url,
          id: user.id,
        },
      },
      String(process.env.JWT_SECRET),
      {
        subject: user.id,
        expiresIn: '1d',
      }
    );

    return { token, user };
  }
}
