import axios from 'axios';

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

    return userResponse;
  }
}
