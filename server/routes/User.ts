import { NextFunction, Request, Response, Router } from 'express';
import User from '../models/User';

const _ = Router();

_.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  const users = await User.find();
  res.status(200).json(users);
});

export default _;
