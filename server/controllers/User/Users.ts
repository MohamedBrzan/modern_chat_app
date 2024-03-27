import { Request, Response } from 'express';
import User from '../../models/User';
import AsyncHandler from '../../middleware/AsyncHandler';
import { IGetUserAuthInfoRequest } from '../../middleware/isAuthorized';

export default AsyncHandler(async (req: Request, res: Response) => {
  console.log(req.user);
  const users = await User.find();
  return res.status(200).json(users);
});
