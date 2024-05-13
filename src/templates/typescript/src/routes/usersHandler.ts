import express from 'express';

import { base, login } from '../controllers/usersController';

export const UsersRoute = (route: express.Application) => {
  route.get('/user', base);
  route.post('/login', login);
};
