import 'dotenv/config';
import express, { Request, response, Response } from 'express';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(router);

app.get('/', (request: Request, response: Response) =>
  response.json({ status: true, message: 'Hello World' })
);

app.get('/github', (request: Request, response: Response) =>
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
);

app.get('/signin/callback', (request: Request, response: Response) => {
  const { code } = request.query;
  response.json({ code });
});

app.listen(4000, () => console.log('Server listen on port 4000'));
