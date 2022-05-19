import express from 'express';

import { AuthRoutes } from './auth/auth.routes';
import { UsersRoutes } from './users/users.routes';

const router = express.Router();

new AuthRoutes(router);
new UsersRoutes(router);

export default router;