import express from 'express';
import { createServer } from 'node:http';
import DB from './db/DB';
import { Server } from 'socket.io';
import { v4 } from 'uuid';
import UserRoute from './routes/User';
import MessageRoute from './routes/Message';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import ErrorMessage from './middleware/ErrorMessage';

dotenv.config();

DB();

const app = express();
const server = createServer(app);

app.use(cookieParser());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
  },
});
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

const port = parseInt(process.env.PORT!) || 8000;

export const getReceiverSocketId = (receiverId: string) => {
  return userSocketMap.get(receiverId);
};

const userSocketMap = new Map();

io.on('connection', async (socket) => {
  console.log('a user connected', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != 'undefined') userSocketMap.set(userId, socket.id);
  console.log(userSocketMap);

  socket.on('keydown', (data) => {
    const receiverSocketId = getReceiverSocketId(data.receiverId);
    socket.to(receiverSocketId).emit('keydown', data.username);
  });

  socket.on('keyup', (data) => {
    const senderSocketId = getReceiverSocketId(data.senderId);
    socket.to(senderSocketId).emit('keyup');
  });

  // io.emit() is used to send events to all the connected clients
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    userSocketMap.delete(userId);
    console.log(userSocketMap);
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

app.use('/', UserRoute);
app.use('/message', MessageRoute);

app.use(ErrorMessage);

server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export { app, io };
