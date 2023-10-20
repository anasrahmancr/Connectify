import express from "express";
import userRoutes from './routes/user.js';
import homeRoutes from './routes/home.js';
import dotenv from 'dotenv';
import connectDB from "./config/database.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials : true,
}))
app.use('/api/user',userRoutes);
app.use('/api/home', homeRoutes);


const PORT = 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))