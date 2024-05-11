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
    console.log('req.body.game: ', req.body.game);
    console.log('bgg_id', bgg_id);
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
      console.log('result: ', result);
      // res.json({ success: true, game: result.rows[0] });
      res.locals.result = result.rows[0];
      res.locals.gamePrimaryKey = result.rows[0].game_id;
      next();
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: 'Server error: ', error });
    }
  },
  addGameToCollection: async function (req, res, next) {
    const game_id = res.locals.gamePrimaryKey;
    console.log('game_id', game_id);
    const user_id = req.body.user.id;
    console.log('addGameToCollection, req.body.user: ', req.body.user);
    const query = `INSERT INTO collections (user_id, game_id) VALUES ($1, $2) RETURNING *`;
    try {
      const result = await pool.query(query, [user_id, game_id]);
      console.log('Added to collection: ', result.rows[0]);
      next();
    } catch (error) {
      console.error('Error adding game to collection table: ', error);
    }
  },
};

export default dataController;
