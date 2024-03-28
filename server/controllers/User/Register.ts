import { Request, Response } from 'express';
import User from '../../models/User';
import AsyncHandler from '../../middleware/AsyncHandler';
import SendToken from '../../utils/SendToken';
import { io } from '../..';

export default AsyncHandler(async (req: Request, res: Response) => {
  const { username, email, password, gender } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser) throw new Error(`user ${email} is already registered`);
  const user = await User.create({ username, email, password, gender });

  io.emit('user', user);
  SendToken(res, user);
});
