import { Request, Response } from "express";
import { getCurrentAverage } from "../services/app.service";

/**
 * @description GetAverage controller
 */
export function GetAverageController(req: Request, res: Response): void {
  res.json({ averageWithCommission: getCurrentAverage() });
}
