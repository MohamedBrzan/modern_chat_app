import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import AsyncHandler from './AsyncHandler';
import User from '../models/User';
import ErrorHandler from './ErrorHandler';

export default AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    if (!token)
      return next(
        new ErrorHandler(404, 'Not Authorized From IsAuthenticated File')
      );
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    req['user'] = await User.findById(decoded['id']);
    next();
  }
);
