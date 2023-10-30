import express from 'express';
import { createPost, getPosts } from '../controllers/postsControllers.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/createPost', upload.array('image') ,createPost);
// router.post('/updatePost');

router.get('/getPosts', getPosts)

export default router;