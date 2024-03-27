import { NextFunction, Request, Response } from 'express';
import Chat from '../../models/Chat';
import ErrorHandler from '../../middleware/ErrorHandler';
import AsyncHandler from '../../middleware/AsyncHandler';
import User from '../../models/User';

export default AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { receiverId } = req.params;

    const receiver = await User.findById(receiverId);

    if (!receiver)
      return next(
        new ErrorHandler(404, `Could not find receiverId ${receiverId}`)
      );
    const chat = await Chat.findOne({
      participants: { $all: [req['user']._id, receiverId] },
    }).populate('messages');

    return res.status(201).json(chat.messages);
  }
);
