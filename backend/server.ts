import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import path from "path";
import bggApiRouter from "./routes/bggApiRouter";
import authRouter from "./routes/authRouter";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/bg", bggApiRouter, (req, res) => {
  // console.log(res.locals.games);
  return res.status(200).json(res.locals.games);
});

app.use("/auth", authRouter);

// app.use("/");

const frontendPath = path.join(__dirname, "..", "frontend");

app.use(express.static(path.join(frontendPath, "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
