import express from 'express'
import { getUserProfile,loginUser,registerUser} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js';

const userRoutes = express.Router();

userRoutes.post('/register',registerUser)
userRoutes.post('/login',loginUser)

//protected route as a token will be required
userRoutes.get('/profile',protect,getUserProfile)

export default userRoutes