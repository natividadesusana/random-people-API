import { Router } from "express";
import personController from "../controllers/person-controllers";

const personRouter = Router();

personRouter.get("/person", personController.getPerson);

export default personRouter;
