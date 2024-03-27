import { NextFunction, Request, Response } from 'express';

import AsyncHandler from '../../middleware/AsyncHandler';

export default AsyncHandler(
  async (_: Request, res: Response, next: NextFunction) => {
    return res
      .cookie('token', '', { maxAge: 0 })
      .json({ message: 'user logged out successfully' });
  }
);
