import express, { Request, Response, NextFunction } from 'express';
import pool from './postGresController';

interface DataController {
  addGameToGamesTable: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
  addGameToCollection: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
}

const dataController: DataController = {
  addGameToGamesTable: async function (req, res, next) {
    if (!req.body.user)
      return res.status(401).send('Access Denied / Unauthorized request');
    const {
      type,
      id,
      thumbnail,
      image,
      name,
      description,
      yearPublished,
      minPlayers,
      maxPlayers,
      playingTime,
      minPlayTime,
      maxPlayTime,
      minimumAge,
    } = req.body.game;
    const userId = req.body.user.id;
    try {
      const query = `INSERT INTO games (type, id, thumbnail, image, name, description, yearPublished, minPlayers, maxPlayers, playingTime, minPlayTime, maxPlayTime, minimumAge) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`;
      const result = await pool.query(query, [
        type,
        id,
        thumbnail,
        image,
        name,
        description,
        yearPublished,
        minPlayers,
        maxPlayers,
        playingTime,
        minPlayTime,
        maxPlayTime,
        minimumAge,
      ]);
      console.log('result: ', result);
      return res.json({ success: true, game: result.rows[0] });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Server error: ', error });
    }
  },
  addGameToCollection: async function (req, res, next) {
    const { gameId } = req.body;
    console.log('game id in addGameToCollection: ', gameId);
  },
};

export default dataController;
