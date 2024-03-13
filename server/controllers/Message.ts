import { NextFunction, Request, Response } from 'express';
import Chat from '../models/Chat';
import Message from '../models/Message';

export const SendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { chatId, sender, receiver, message } = req.body;

    let chat = await Chat.findById(chatId);

    if (!chat) {
      chat = await Chat.create({ user: { first: sender, second: receiver } });
    }

    const msg = await Message.create({ sender, receiver, message });

    chat.messages.push(msg);
    await chat.save();

    res.status(201).json(msg);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
