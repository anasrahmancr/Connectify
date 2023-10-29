import express from "express";
import { userLogin, userRegister } from "../controllers/user.js";

const router = express.Router();

router.post('/userLogin', userLogin);
router.post('/userRegister', userRegister);


 
export default router;