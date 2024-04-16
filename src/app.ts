import express, { Application, Router } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes/routes';

const PORT: number = 3333;

export const app: Application = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
extended: true }));
app.use(routes);

process.env.NODE_ENV !== 'test'
  ? app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    }) && mongoose.connect(process.env.MONGO_URI as string)
      .then(() => console.log('Connected to Database'))
      .catch(error => console.log('Error to connect Database!'))
  : null;