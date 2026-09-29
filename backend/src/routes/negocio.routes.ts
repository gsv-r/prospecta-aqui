import { Router } from "express";
import { buscar } from "../controllers/negocio.controller";
import { rateLimit } from "../middlewares/rate-limit";

const router = Router();

router.post("/buscar", rateLimit, buscar);

export default router;
