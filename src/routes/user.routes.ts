import { Router } from 'express';
import { createUser, getUsers, updateUser, deleteUser, getUser } from '../controllers/user.controllers'

const router = Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/login', getUser);
router.put('/users', updateUser);
router.delete('/user', deleteUser);

export default router;