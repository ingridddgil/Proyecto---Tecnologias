import {Router} from 'express'
import { logout, signin, signup, viewprofile } from '../controllers/auth.controller.js';

const router = Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.post('/logout', logout);
router.get('/profile', viewprofile);


export default router;
