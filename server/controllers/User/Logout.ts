import { NextFunction, Request, Response } from 'express';

import AsyncHandler from '../../middleware/AsyncHandler';
import ErrorHandler from '../../middleware/ErrorHandler';

export default AsyncHandler(
  async (_: Request, res: Response, next: NextFunction) => {
    const { token } = _.cookies;
    if (!token) next(new ErrorHandler(404, 'user already logged out'));
    return res
      .cookie('token', '', { maxAge: 0 })
      .json({ message: 'user logged out successfully' });
  }
);
