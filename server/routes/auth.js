import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login); // it is actually /auth/login from authRoutes

export default router;