import express from "express";
import { userLogin, userRegister, forgotPassword } from "../controllers/user.js";

const router = express.Router();

router.post('/userLogin', userLogin);
router.post('/userRegister', userRegister);

router.post('/forgotPassword', forgotPassword);


 
export default router;