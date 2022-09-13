import express from 'express';
import action_router from './api/action_routes';
import event_router from './api/event_routes';
import user_router from './api/user_routes';

const routes = express.Router();

routes.use('/events', event_router);
routes.use('/users,', user_router);
routes.use('/actions', action_router);

export default routes;
