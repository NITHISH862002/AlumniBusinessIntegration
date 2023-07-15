import express from "express";
import User from "../models/User.js";
import { registerUser, loginUser } from "../controllers/userControllers.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
