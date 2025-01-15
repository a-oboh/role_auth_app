import { Router } from "express";
import { admin } from "../controllers/adminController.js";
import { authenticate, authorize } from "../middlewares/auth.js";

const router = Router();

router.get("/protected", authenticate, authorize('Admin'), admin);

export default router;