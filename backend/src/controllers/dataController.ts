import express, { Request, Response, NextFunction } from 'express';
import pool from './postGresController';
import { ErrInfo } from '../@types';

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
  getGamesFromCollection: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
  removeGameFromCollection: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => void;
}

const createErr = (errInfo: ErrInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `dataController.${method} ${type}: ERROR: ${
      typeof err === 'object' ? JSON.stringify(err) : err
    }`,
    message: {
      err: `Error occured in dataController.${method}. Check server logs for more details.`,
    },
  };
};

const dataController: DataController = {
  addGameToGamesTable: async function (req, res, next) {
    if (!req.body.user)
      return res.status(401).send('Access Denied / Unauthorized request');
    const {
      type,
      bgg_id,
      thumbnail_url,
      image_url,
      title,
      description,
      year_published,
      min_players,
      max_players,
      playing_time,
      min_play_time,
      max_play_time,
      min_age,
    } = req.body.game;
    const userId = req.body.user.id;
    try {
      const query = `INSERT INTO games (type, bgg_id, thumbnail_url, image_url, title, description, year_published, min_players, max_players, playing_time, min_play_time, max_play_time, min_age) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)   ON CONFLICT (bgg_id)
      DO UPDATE SET
        type = EXCLUDED.type,
        thumbnail_url = EXCLUDED.thumbnail_url,
        image_url = EXCLUDED.image_url,
        title = EXCLUDED.title,
        description = EXCLUDED.description,
        year_published = EXCLUDED.year_published,
        min_players = EXCLUDED.min_players,
        max_players = EXCLUDED.max_players,
        playing_time = EXCLUDED.playing_time,
        min_play_time = EXCLUDED.min_play_time,
        max_play_time = EXCLUDED.max_play_time,
        min_age = EXCLUDED.min_age RETURNING *`;
      const result = await pool.query(query, [
        type,
        bgg_id,
        thumbnail_url,
        image_url,
        title,
        description,
        year_published,
        min_players,
        max_players,
        playing_time,
        min_play_time,
        max_play_time,
        min_age,
      ]);
      res.locals.result = result.rows[0];
      res.locals.gamePrimaryKey = result.rows[0].game_id;
      return next();
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Error storing data: ', error.message);
      res.status(500).send('Error storing data');
      return next(
        createErr({
          method: 'addGameToGamesTable in dataController',
          type: 'PostgreSQL Storage Error',
          err: 'Storing data in games table failed',
        })
      );
    }
  },
  addGameToCollection: async function (req, res, next) {
    const game_id = res.locals.gamePrimaryKey;
    const user_id = req.body.user.id;
    const query = `INSERT INTO collections (user_id, game_id) VALUES ($1, $2) RETURNING *`;
    try {
      const result = await pool.query(query, [user_id, game_id]);
      next();
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Error storing data: ', error.message);
      res.status(500).send('Error storing data');
      return next(
        createErr({
          method: 'addGameToCollection in dataController',
          type: 'PostgreSQL Storage Error',
          err: 'Storing data in collections table failed',
        })
      );
    }
  },
  getGamesFromCollection: async function (req, res, next) {
    const user_id = req.params.id;

    const collectionQuery = `
    SELECT g.*
    FROM collections c
    JOIN games g ON g.game_id = c.game_id
    WHERE c.user_id = $1;
    `;

    try {
      const games = await pool.query(collectionQuery, [user_id]);

      console.log('result is: ', games.rows);
      res.locals.collection = games.rows;
      return next();
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Error retrieving game collection: ', error.message);
      res.status(500).send('Error retrieving game collection');
      return next(
        createErr({
          method: 'getGamesFromCollection in dataController middleware',
          type: 'PostgreSQL Retrieval Error',
          err: 'Fetching game details from the collection failed',
        })
      );
    }
  },
  removeGameFromCollection: async function (req, res, next) {
    // const game_id = res.locals.gamePrimaryKey;
    const { user_id, game_id } = req.params;
    const query = `DELETE FROM collections WHERE user_id = $1 AND game_id = $2`;
    try {
      const result = await pool.query(query, [user_id, game_id]);
      if (result.rowCount && result.rowCount > 0) {
        res
          .status(200)
          .json({ success: true, message: 'Game removed from collection.' });
      } else {
        res
          .status(404)
          .json({ success: false, message: 'Game not found in collection.' });
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error('Error deleting data: ', error.message);
      res.status(500).send('Error deleting data');
      return next(
        createErr({
          method: 'removeGameFromCollection in dataController',
          type: 'PostgreSQL Deletion Error',
          err: 'Deleting row in collections table failed',
        })
      );
    }
  },
};

export default dataController;
