import express from 'express';

import {
  getClubs,
  getClubId,
  postClub,
  updateClub,
  deleteClub,
} from '../controller/clubs.controller.js';

const router = express.Router();

router.get('/clubs', getClubs);
router.get('/clubs/:clubId', getClubId);
router.post('/clubs', postClub);
router.put('/clubs/:clubId', updateClub);
router.delete('/clubs/:clubId', deleteClub);

export default router;
