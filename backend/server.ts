import * as dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import bggApiRouter from './src/routes/bggApiRouter';
import authRouter from './src/routes/authRouter';
import dataRouter from './src/routes/dataRouter';
import cors from 'cors';

import { ErrInfo } from './src/@types';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

const frontendPath = path.join(__dirname, '..', 'frontend');

app.use(express.static(path.join(frontendPath, '/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.use('/bg', bggApiRouter, (req, res) => {
  return res.status(200).json(res.locals.games);
});

app.use('/auth', authRouter);

app.use('/data', dataRouter);

app.get('*', (req, res) => {
  res.status(404).send('Page not found');
});

app.use((err: ErrInfo, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj);
  res.status(errorObj.status).json({ error: errorObj.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
