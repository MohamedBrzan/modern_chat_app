import { NextFunction, Request, Response } from 'express';
import Chat from '../../models/Chat';
import ErrorHandler from '../../middleware/ErrorHandler';
import AsyncHandler from '../../middleware/AsyncHandler';
import Message from '../../models/Message';

export default AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { chatId, messageId, newMessage } = req.body;

    const chat = await Chat.findById(chatId).populate('messages');

    if (!chat)
      return next(new ErrorHandler(404, `Could not find chat ${chatId}`));

    const findMsgInChat = chat.messages.find(
      (msg) => msg['_id'].toString() === messageId
    );

    if (!findMsgInChat)
      return next(new ErrorHandler(404, `Could not find message ${messageId}`));

    const msg = await Message.findById(messageId);

    msg.message = newMessage;
    msg.isEdited = true;
    await msg.save();

    return res.status(200).json(msg);
  }
);
