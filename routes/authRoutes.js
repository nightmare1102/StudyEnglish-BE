import { Router } from 'express';
const router = Router();
import { register, login, logout } from '../controllers/authController.js';
import auth from '../middlewares/auth.js';

router.post('/register', register);
router.post('/login', login);
router.post('/logout', auth, logout);

export default router;
