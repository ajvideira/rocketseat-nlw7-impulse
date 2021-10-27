import { Request, Response, Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CrateMessageController } from './controllers/CreateMessageController';
import { GetThreeLastMessagesController } from './controllers/GetThreeLastMessagesController';
import { GetUserProfileController } from './controllers/GetUserProfileController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

export const router = Router();

router.get('/github', (_, response: Response) =>
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
);

router.get('/signin/callback', (request: Request, response: Response) => {
  const { code } = request.query;
  response.json({ code });
});

router.post('/authenticate', new AuthenticateUserController().handle);
router.post(
  '/messages',
  ensureAuthenticated,
  new CrateMessageController().handle
);
router.get('/messages/last-three', new GetThreeLastMessagesController().handle);
router.get(
  '/user/profile',
  ensureAuthenticated,
  new GetUserProfileController().handle
);
