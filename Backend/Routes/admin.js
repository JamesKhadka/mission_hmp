import express from 'express';
import { registerAdmin, adminLogin } from '../Controllers/adminController.js';

const router = express.Router();

// Admin routes
router.post('/register', registerAdmin); // Admin registration
router.post('/login', adminLogin);       // Admin login

export default router;
