import { Request, Response, NextFunction } from 'express';
import User from '../../models/User';
import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

export default async function Register(
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  try {
    console.log('heyy~~');
    io?.on('connection', async (socket) => {
      socket.on('register', async ({ username, email, password }) => {
        socket.emit('received_registration', { username, email, password });
        let user = await User.find({ email });
        if (user) throw new Error(`user ${email} is already registered`);
        await User.create({ username, email, password });
        socket.emit('user', { username, email, password });
      });
    });
  } catch (err) {
    throw new Error(`${err}`);
  }
}
