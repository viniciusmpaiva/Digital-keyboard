import { Router } from 'express';
import {
  createPreset, getAllPresets, getPresetsByProfile, deleteAllProfilePresets,
} from '../controllers/preset.controller';

import loginRequired from '../middlewares/loginRequired';

const router = Router();

router.get('/all', getAllPresets);
router.get('/:profileId', loginRequired, getPresetsByProfile);
router.post('/', loginRequired, createPreset);
router.delete('/:profileId', deleteAllProfilePresets);

export default router;
