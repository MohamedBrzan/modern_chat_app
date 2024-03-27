import { UserInterface } from '../models/User';
import { Response } from 'express';

export default function SendToken(res: Response, user: UserInterface) {
  const token = user.generateToken();

  const options = {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure: true,
  };

  return res.status(200).cookie('token', token, options).json(user);
}
