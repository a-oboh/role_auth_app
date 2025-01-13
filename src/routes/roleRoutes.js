import { Router } from 'express';
import { assignRole, createRole } from '../controllers/roleController.js';
import authenticate from '../middlewares/auth.js'
const router = Router();


router.post('/assign-role', authenticate, assignRole);
router.post('/role', createRole);

export default router;
