import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { join } from 'node:path';
import { createServer } from 'node:http';
import User from './routes/User';
import Message from './routes/Message';
import DB from './db/DB';
import { Server } from 'socket.io';

//For env File
dotenv.config();

DB();

const app: Application = express();
const server = createServer(app);
const io = new Server();
app.use(express.json());
const port = process.env.PORT || 8000;

app.use('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('user connected', socket);
});

app.use('/register', User);
app.use('/message', Message);

server.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
