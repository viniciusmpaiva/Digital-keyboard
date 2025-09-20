import { Router } from 'express';

import storeToken from '../controllers/token.controller';

const router = Router();

router.post('/', storeToken);

export default router;
