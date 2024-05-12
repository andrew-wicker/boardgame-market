import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import pool from './postGresController';
import jwt from 'jsonwebtoken';
import { ErrInfo } from '../@types';

const createErr = (errInfo: ErrInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `authController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occured in authController.${method}. Check server logs for more details.`,
    },
  };
};

const SECRET_KEY =
  process.env.SECRET_KEY ||
  (() => {
    throw new Error('SECRET_KEY is not defined in your environment variables');
  })();

interface AuthController {
  login: (req: Request, res: Response, next: NextFunction) => void;
  create: (req: Request, res: Response, next: NextFunction) => void;
  verifyToken: (req: Request, res: Response, next: NextFunction) => void;
}

const authController: AuthController = {
  login: async function (req, res, next) {
    const { username, password } = req.body;
    const query = `SELECT user_id, username, password_hash FROM users WHERE username = $1`;

    try {
      const result = await pool.query(query, [username]);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        const validPassword = await bcrypt.compare(
          password,
          user.password_hash
        );
        if (validPassword) {
          const token = jwt.sign(
            {
              user_id: user.user_id,
              username: user.username,
            },
            SECRET_KEY,
            { expiresIn: '7d' }
          );
          console.log('token in authController: ', token);

          res.json({ success: true, token, userId: user.user_id });
        } else {
          res.status(401).json({ success: false, message: 'Invalid password' });
        }
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ success: false, message: 'Server error: ', err });
      const error = err as Error;

      return next(
        createErr({
          method: 'create in authController',
          type: 'Account creation',
          err: 'Adding account to users table failed',
        })
      );
    }
  },
  create: async function (req, res, next) {
    console.log('req.body.username: ', req.body.username);
    const { username, password, email } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    try {
      const query = `INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING *`;
      const result = await pool.query(query, [username, passwordHash, email]);
      console.log('result: ', result);
      res.json({ success: true, user: result.rows[0] });
    } catch (err: unknown) {
      res.status(500).json({ success: false, message: 'Server error: ', err });
      const error = err as Error;
      return next(
        createErr({
          method: 'create in authController',
          type: 'Account creation',
          err: 'Adding account to users table failed',
        })
      );
    }
  },
  verifyToken: function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    const { userId } = req.body;
    const { gameId } = req.body;
    console.log('token: ', token);

    if (!token) {
      return res.status(401).send('Access Denied / Unauthorized request');
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      if (typeof decoded === 'object' && 'user_id' in decoded) {
        req.body.user = {
          id: decoded.user_id,
          username: decoded.username,
        };
        next();
      } else {
        throw new Error('Invalid token structure');
      }
    } catch (err: unknown) {
      res.status(400).send('Invalid Token');
      const error = err as Error;
      return next(
        createErr({
          method: 'verifyToken in authController',
          type: 'Token Verification',
          err: 'Unable to verify token',
        })
      );
    }
  },
};

export default authController;