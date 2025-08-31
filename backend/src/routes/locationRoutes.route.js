import { Router } from "express";
import { updateLocation, getEmployeeLocation } from "../controllers/locationController.js";
import { auth } from "../middleware/auth.js";

const router = Router();
router.post("/update", auth("employee"), updateLocation);
router.get("/employee/:id", auth("manager"), getEmployeeLocation);
export default router;
