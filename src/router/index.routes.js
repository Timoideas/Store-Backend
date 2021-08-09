import { Router } from 'express';
const routes = Router();

// MIDDLEWARES
import { Auth } from '../middlewares/auth.middleware';

// ROUTES
import sale from './sale.routes';
routes.use('/sale', sale);
import user from './user.routes';
routes.use('/user', user);

import { Index, BadRequest } from '../controllers/global.controller';
routes.route('/').get(Auth, Index);
routes.route('*').get(BadRequest);

export default routes;
