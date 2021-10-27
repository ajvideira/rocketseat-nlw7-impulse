import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

type TokenPayload = {
  sub: string;
};

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken || authToken.split(' ').length !== 2) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(
      token,
      String(process.env.JWT_SECRET)
    ) as TokenPayload;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ error: 'Invalid token' });
  }
}
