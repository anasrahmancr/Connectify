import express from "express";
import { loginData, signupData } from "../controllers/authControllers.js";

const router = express.Router();

router.post('/loginData', loginData);
router.post('/signupData', signupData);


 
export default router;