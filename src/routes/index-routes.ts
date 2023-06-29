import { Router } from "express";
import personRouter from "../routes/person-routes";

const router = Router();

router.use(personRouter);

export default router;