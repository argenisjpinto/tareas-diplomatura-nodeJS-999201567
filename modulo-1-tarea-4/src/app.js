import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.route.js';
import { connectMongoDb } from './config/connectDb.js';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3001;

server.use(cors());
server.use(express.json());
server.use(express.static('public'));

server.use('/users', userRouter);

server.listen(PORT, () => {
    connectMongoDb();
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});