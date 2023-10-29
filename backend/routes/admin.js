import express from "express";
import { adminLogin, adminRegister } from "../controllers/admin.js";

const router = express.Router();

        // Admin Auth
router.post('/adminLogin', adminLogin);
router.post('/adminRegister', adminRegister);

        // User Management


export default router;
