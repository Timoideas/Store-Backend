import { Router } from 'express';
const routes = Router();

// CONTROLLERS
import {
  GET_users,
  GET_user,
  POST_user,
  PUT_user,
  DEL_user,
} from '../controllers/user.controller';

// MIDDLEWARES

// -- Global Routes

routes.route('/').get(GET_users);
routes
  .route('/:id')
  .get(GET_user)
  .post(POST_user)
  .put(PUT_user)
  .delete(DEL_user);

export default routes;
