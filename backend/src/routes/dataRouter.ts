import express from 'express';
import dataController from '../controllers/dataController';
import authController from '../controllers/authController';

const router = express.Router();

router.delete(
  '/collection/:game_id',
  authController.verifyToken,
  dataController.removeGameFromCollection,
  (req, res) => {
    return res.json({ success: true, game: res.locals.result });
  }
);

router.post(
  '/collection',
  authController.verifyToken,
  dataController.addGameToGamesTable,
  dataController.addGameToCollection,
  (req, res) => {
    return res.json({ success: true, game: res.locals.result });
  }
);

router.get(
  '/view/:id',
  authController.verifyToken,
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
