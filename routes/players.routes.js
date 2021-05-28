import express from 'express';

import {
  getPlayers,
  getPlayerId,
  postPlayer,
  updatePlayer,
  deletePlayer,
} from '../controller/players.controller.js';

const router = express.Router();

router.get('/players', getPlayers);
router.get('/players/:playerId', getPlayerId);
router.post('/players', postPlayer);
router.put('/players/:playerId', updatePlayer);
router.delete('/players/:playerId', deletePlayer);

export default router;
