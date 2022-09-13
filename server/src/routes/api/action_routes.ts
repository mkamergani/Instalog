import express from 'express';
import { index, create } from '../../handlers/actions_handler';

const action_router = express.Router();

action_router.get('/', index);
action_router.post('/', create);

export default action_router;
