import express from 'express';
import dataController from '../controllers/dataController';
import authController from '../controllers/authController';

const router = express.Router();

router.post(
  '/collection/add',
  authController.verifyToken,
  dataController.addGameToCollection,
  (req, res, next) => {
    console.log(req.body);
    return res.status(200).json('/collection');
  }
);
router.post('/gameData', (req, res, next) => {
  console.log(req.body);
  return res.status(200).json('/gameData');
});

export default router;
