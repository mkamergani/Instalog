import express from 'express';
import { index, create } from '../../handlers/users_handler';

const user_router = express.Router();

user_router.get('/', index);
user_router.post('/', create);

export default user_router;
