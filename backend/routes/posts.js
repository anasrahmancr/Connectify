import express from 'express';
import { createPost, getPosts } from '../controllers/postsControllers.js';
const router = express.Router();

router.post('/createPost', createPost);
// router.post('/updatePost');

router.get('/getPosts', getPosts)

export default router;