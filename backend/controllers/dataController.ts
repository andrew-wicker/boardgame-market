import express, { Request, Response, NextFunction } from "express";
import pool from "./postGresController";

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
    const { gameId } = req.body;
    const userId = req.user.id;
    console.log(gameId);
    next();
  },
  addGameToCollection: async function (req, res, next) {
    const { gameId } = req.body;
    console.log(gameId);
  },
};

export default dataController;
