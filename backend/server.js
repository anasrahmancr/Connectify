import express from "express";
import userRoutes from './routes/user.js';
import postRoutes from './routes/posts.js';
import adminRoutes from './routes/admin.js';
import dotenv from 'dotenv';
import connectDB from "./config/database.js";
import cors from 'cors';
import cookieParser from "cookie-parser";
// import { Server } from "socket.io";
// import http from 'http';

const app = express();
dotenv.config();
connectDB();    

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials : true,}
))
app.use('/api/user',userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/admin', adminRoutes);


const PORT = 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`))