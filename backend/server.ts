import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import bggApiRouter from './src/routes/bggApiRouter';
import authRouter from './src/routes/authRouter';
import dataRouter from './src/routes/dataRouter';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use('/bg', bggApiRouter, (req, res) => {
  // console.log(res.locals.games);
  return res.status(200).json(res.locals.games);
});

app.use('/auth', authRouter);

app.use('/data', dataRouter);

const frontendPath = path.join(__dirname, '..', 'frontend');

app.use(express.static(path.join(frontendPath, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
