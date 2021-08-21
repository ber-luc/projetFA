import express from 'express';
import controller from '../controllers/postsControllers';
const router = express.Router();

router.get('/events', controller.getEvents);
router.get('/parteners ', controller.getParteners);

export = router;