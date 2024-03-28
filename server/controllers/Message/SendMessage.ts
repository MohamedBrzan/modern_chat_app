import { NextFunction, Request, Response } from 'express';
import Chat from '../../models/Chat';
import Message from '../../models/Message';
import User from '../../models/User';
import ErrorHandler from '../../middleware/ErrorHandler';
import AsyncHandler from '../../middleware/AsyncHandler';
import { getReceiverSocketId, io } from '../..';

export default AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { receiverId, message } = req.body;
    const senderId = req['user']._id;

    const sender = await User.findById(senderId);

    let receiver = await User.findById(receiverId);

    if (!receiver)
      return next(
        new ErrorHandler(404, `Could not find receiverId ${receiverId}`)
      );

    const msg = await Message.create({
      sender: req['user']._id,
      receiver: receiverId,
      message,
    });

    let chat = await Chat.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!chat) {
      chat = await Chat.create({ participants: [senderId, receiverId] });
      chat.messages.push(msg);
      sender.chats.push(chat);
      receiver.chats.push(chat);
    } else {
      chat.messages.push(msg);
      sender.chats.push(chat);
      receiver.chats.push(chat);
    }
    await Promise.all([sender.save(), receiver.save(), chat.save()]);

    // SOCKET IO FUNCTIONALITY WILL GO HERE
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socket_id>).emit() used to send events to specific client
      io.to(receiverSocketId).emit('new_message', msg);
    }

    return res.status(201).json(msg);
  }
);
