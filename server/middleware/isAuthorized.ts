import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import AsyncHandler from './AsyncHandler';
import User from '../models/User';
import ErrorHandler from './ErrorHandler';

export interface IGetUserAuthInfoRequest extends Request {
  user: any; // or any other type
}

export default AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    if (!token)
      return next(
        new ErrorHandler(404, 'Not Authorized From IsAuthenticated File')
      );
    jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!,
      async function (err: any, decoded: any) {
        if (err) return next(new ErrorHandler(404, 'Invalid JWT Token'));

        req.user = await User.findById(decoded.id);
      }
    );
    next();
  }
);
