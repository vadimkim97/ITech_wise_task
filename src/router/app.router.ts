import express, { Router } from "express";
import { GetAverageController } from "../controller/app.controller";

const router: Router = express.Router();

// Routers list
router.get("/price", GetAverageController);

export default router;
