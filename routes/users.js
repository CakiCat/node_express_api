import express from 'express';

import { createUser, deleteUser, getUsers, getUser, editUser } from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', editUser)

export default router;