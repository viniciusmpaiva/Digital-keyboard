import dotenv from 'dotenv';
import mongoose from 'mongoose';

import db from './config/dbConnect';
import app from './app';

mongoose.set('debug', true);
dotenv.config();

async function connectDB() {
  const dbConnection = await db();
  console.log('Connecting to Database');
  dbConnection.on('error', (error) => console.log(error));
  dbConnection.once('open', () => console.log('Connected to Database'));
}

connectDB();

const port = 3001;
app.listen(port, () => {
  console.log(process.env.DATABASE_CONNECTION_STRING);
  console.log(`Server is running on port ${port}`);
  console.log(`http://localhost:${port}`);
});
