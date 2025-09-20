import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import userRoutes from './routes/user.routes';
import profileRoutes from './routes/profile.routes';
import tokenRoutes from './routes/token.routes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/profiles', profileRoutes);
    this.app.use('/token', tokenRoutes);
  }
}

export default new App().app;
