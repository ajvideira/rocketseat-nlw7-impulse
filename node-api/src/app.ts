import 'dotenv/config';
import http from 'http';
import path from 'path';
import express, { Request, Response } from 'express';
import { Server } from 'socket.io';
import { router } from './routes';
import cors from 'cors';

const app = express();
app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use(cors());
app.use(express.json());
app.use(router);

const httpServer = http.createServer(app);

export const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) =>
  console.log(`user connected on socket ${socket.id}`)
);

httpServer.listen(4000, () => console.log('Server listen on port 4000'));
