import express, { json } from 'express';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import 'dotenv/config'

const app = express();

connectDB();

app.use(json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
