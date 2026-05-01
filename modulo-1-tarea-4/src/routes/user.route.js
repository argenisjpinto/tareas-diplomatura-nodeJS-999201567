import { Router } from 'express';
import { getUsers, addUser, deleteUser, updateUser } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/', addUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export { userRouter };