import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        username?: string;
        [key: string]: any;
      };
    }
  }
}
