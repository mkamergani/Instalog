import express from 'express';
import { index, show, create } from '../../handlers/events_handler';

const event_router = express.Router();

event_router.get('/', index);
event_router.get('/:id', show);
event_router.post('/', create);

export default event_router;
