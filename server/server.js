import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 4000
connectDB()

// Middleware - ORDER MATTERS!
app.use(cors({ credentials: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.json())

// API ENDPOINTS
app.get('/', (req, res) => res.send("API WORKING fine"))
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, () => console.log(`server started on port ${port}`))
