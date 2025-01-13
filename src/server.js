import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import permissionRoutes from './routes/permissionRoutes.js';
import connectDB from './services/connectDB.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/roles', roleRoutes);
app.use('/permissions', permissionRoutes);

const PORT = process.env.PORT || 3001;

connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
