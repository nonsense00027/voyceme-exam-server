import express from "express";
import { createAccount } from "../controllers/account";

const router = express.Router();

router.post("/submit", createAccount);

export default router;
