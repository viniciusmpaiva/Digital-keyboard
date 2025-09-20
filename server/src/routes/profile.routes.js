import { Router } from 'express';

import {
  postProfile, getUserProfilesById, deleteProfile,
} from '../controllers/profile.controller';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/', loginRequired, getUserProfilesById);
router.post('/', loginRequired, postProfile);
router.delete('/', loginRequired, deleteProfile);

export default router;
