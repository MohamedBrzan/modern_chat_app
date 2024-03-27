import { Request, Response, NextFunction } from 'express';
import User from '../../models/User';
import AsyncHandler from '../../middleware/AsyncHandler';
import SendToken from '../../utils/SendToken';
import { io } from '../..';

export default AsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new Error(`user ${email} not exist`);
  const isMatched = await user.passwordComparison(password);

  if (!isMatched) throw new Error(`Wrong password: ${password}`);

  io.emit('user', user);

  SendToken(res, user);
});
