import express, { Request, Response, NextFunction } from "express";
import bgQuery from "../controllers/bgQueryController";
import xml2js from "xml2js";
const router = express.Router();

router.get("/bgquery/:id", bgQuery.gameDetailSearch, (req, res, next) => {
  return res.status(200).json(res.locals.gameDetails);
});

router.get("/bgquery", bgQuery.gameSearch, (req, res, next) => {
  return res.status(200).json(res.locals.games);
});

export default router;
