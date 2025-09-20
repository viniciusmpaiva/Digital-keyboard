import { Router } from 'express';

import {
  postUser, getAllUsers, getUserByUsername, deleteUser,
} from '../controllers/user.controller';
import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.post('/', postUser);
router.get('/:username', getUserByUsername);
router.get('/', getAllUsers);
router.delete('/', loginRequired, deleteUser);

export default router;
