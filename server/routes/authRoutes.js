import express from 'express'
import { isAuthenticated, login, logout, register, resetPassword, sendResestOtp, sendVerifyOtp, verifyEmail } from '../controller/authController.js'
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router()

// we are creatign api endpoints here 
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
// whyfirstWeAddedTheMiddleWareAndThenTheControllerFucnction
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp);
authRouter.post('/verify-account', userAuth, verifyEmail);
authRouter.post('/is-auth', userAuth, isAuthenticated);

// for reset password 

authRouter.post('/send-reset-otp', sendResestOtp);
authRouter.post('/reset-password', resetPassword);


export default authRouter;