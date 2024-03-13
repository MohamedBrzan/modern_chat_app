import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

export const Register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) throw new Error(`User is already registered`);

    user = await User.create({ name, email, password });

    res.status(201).json(user);
  } catch (error) {
    throw new Error(`${error}`);
  }
};
