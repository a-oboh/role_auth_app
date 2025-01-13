import express from 'express';
import { createPermission } from '../controllers/permissionController.js';

const router = express.Router();

router.post('/permission', createPermission);

export default router;