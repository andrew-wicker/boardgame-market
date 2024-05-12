import express from 'express';
import dataController from '../controllers/dataController';
import authController from '../controllers/authController';

const router = express.Router();

router.post(
  '/collection/add',
  authController.verifyToken,
  dataController.addGameToGamesTable,
  dataController.addGameToCollection,
  (req, res) => {
    return res.json({ success: true, game: res.locals.result });
  }
);

router.get(
  '/collection/view',
  dataController.getGamesFromCollection,
  (req, res) => {
    return res.status(200).json(res.locals.collection);
  }
);

router.post('/gameData', (req, res, next) => {
  console.log(req.body);
  return res.status(200).json('/gameData');
});

export default router;
