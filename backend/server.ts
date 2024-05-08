import * as dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import bggApiRouter from "./routes/bggApi";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/bg", bggApiRouter, (req, res) => {
  return res.status(200).json(res.locals.games);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
