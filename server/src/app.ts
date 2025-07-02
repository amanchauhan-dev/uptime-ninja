import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/user.routes';


dotenv.config();
const app = express();
// Middleware
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
// Health check
app.use(router)

export default app;
