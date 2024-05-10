import express, { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import pool from "./postGresController";

interface AuthController {
  login: (req: Request, res: Response, next: NextFunction) => void;
  create: (req: Request, res: Response, next: NextFunction) => void;
}

const authController: AuthController = {
  login: async function (req, res, next) {
    console.log("req.body.username", req.body.username);
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
          res.json({ success: true });
        } else {
          res.status(401).json({ success: false, message: "Invalid password" });
        }
      } else {
        res.status(404).json({ success: false, message: "User not fount" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Server error: ", error });
    }
  },
  create: async function (req, res, next) {
    console.log("req.body.username: ", req.body.username);
    const { username, password, email } = req.body;
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    try {
      const query = `INSERT INTO users (username, password_hash, email) VALUES ($1, $2, $3) RETURNING *`;
      const result = await pool.query(query, [username, passwordHash, email]);
      console.log("result: ", result);
      res.json({ success: true, user: result.rows[0] });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Server error: ", error });
    }
  },
};

export default authController;
