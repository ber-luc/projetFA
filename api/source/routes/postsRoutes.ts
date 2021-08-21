import express from 'express';
import controller from '../controllers/postsControllers';
const router = express.Router();

router.get('/posts', controller.getPosts);

export = router;