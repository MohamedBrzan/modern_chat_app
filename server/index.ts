import express from 'express';
import dotenv from 'dotenv';
import { createServer } from 'node:http';
import DB from './db/DB';
import { Server } from 'socket.io';
import { v4 } from 'uuid';
import UserModel from './models/User';
import Message from './models/Message';
import UserRoute from './routes/User';
import cors from 'cors';

//For env File
dotenv.config();

DB();

const app = express();
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
  },
});
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
const port = process.env.PORT || 8000;
const userId = v4();

io.on('connection', async (socket) => {
  console.log(`user ${userId} connected`);
  socket.emit('session', {
    userId,
  });

  socket.on('register', async ({ username, email, password }) => {
    let user = await UserModel.findOne({ email });
    if (user) throw new Error(`this email ${email} is already registered`);

    user = await UserModel.create({
      username,
      email,
      password,
    });

    socket.emit('user', user);
  });

  socket.on('sign_in', async ({ email, password }) => {
    let user = await UserModel.findOne({ email });
    if (!user) throw new Error(`this email ${email} not exists`);

    if (user.password !== password) throw new Error('wrong password');

    socket.emit('received_sign_in', user);
  });

  socket.on('send_message', async ({ sender, receiver, message }) => {
    const msg = await Message.create({ sender, receiver, message });
    socket.emit('received_message', msg);
  });
});

app.use('/', UserRoute);
// app.use('/message', Message);

server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
