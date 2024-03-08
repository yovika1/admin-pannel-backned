import express from 'express';
import { LoginOtp, verifyOtp } from '../controllers/sendOtp.js';

const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
    res.send("login successfully");
});

usersRouter.post('/login',LoginOtp);
usersRouter.post('/verify',verifyOtp)


export default usersRouter;
