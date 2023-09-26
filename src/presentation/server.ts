import express, { Application } from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';


const app: Application = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors());

export { app, server, io };
