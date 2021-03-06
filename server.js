import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import clubRoutes from './routes/clubs.routes.js';
import playerRoutes from './routes/players.routes.js';

dotenv.config();
const connectionString =
  process.env.DB_CONNECTION || 'mongodb://localhost:27017/transfer-market';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.set('returnOriginal', false);

const server = express();

server.use(express.json());
server.use(clubRoutes);
server.use(playerRoutes);

server.get('/', (req, res) => res.json({ status: 'Server is running.' }));

server.listen(4000);
