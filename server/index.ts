import express, { response } from 'express';
import { createServer } from 'node:http';
import DB from './db/DB';
import { Server } from 'socket.io';
import { v4 } from 'uuid';
import UserModel from './models/User';
import Message from './models/Message';
import UserRoute from './routes/User';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import session from 'express-session';
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

//* Setup the session middleware
app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: parseInt(process.env.EXPIRES!), secure: true },
  })
);
const port = parseInt(process.env.PORT!) || 8000;
const userId = v4();

io.on('connection', async (socket) => {
  console.log(`user ${userId} connected`);
});

app.use('/', UserRoute);
// app.use('/message', Message);

app.use(ErrorMessage);

server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export { app, io };
