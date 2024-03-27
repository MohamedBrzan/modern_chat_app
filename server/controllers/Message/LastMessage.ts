import { NextFunction, Request, Response } from 'express';
import Chat from '../../models/Chat';
import ErrorHandler from '../../middleware/ErrorHandler';
import AsyncHandler from '../../middleware/AsyncHandler';

export default AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { chatId } = req.body;

    const chat = await Chat.findById(chatId).populate('messages');

    if (!chat)
      return next(new ErrorHandler(404, `Could not find chat ${chatId}`));

    const lastMessage = chat.messages.slice(chat.messages.length - 1);

    return res.status(200).json(lastMessage);
  }
);
