import express, { Request, Response } from 'express';
import event_router from './api/event_routes';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.json('Instalog API');
});
routes.use('/events', event_router);

export default routes;
