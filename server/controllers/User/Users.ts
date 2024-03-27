import { Request, Response } from 'express';
import User from '../../models/User';
import AsyncHandler from '../../middleware/AsyncHandler';

export default AsyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({ _id: { $ne: req['user']._id } });
  return res.status(200).json(users);
});
