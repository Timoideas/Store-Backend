import { Router } from 'express';
const routes = Router();

// CONTROLLERS
import {
	GET_sales,
	GET_sale,
	POST_sale,
	PUT_sale,
	DEL_sale,
} from '../controllers/sale.controller';

// MIDDLEWARES

// -- Global Routes

routes.route('/').get(GET_sales);
routes
	.route('/:id')
	.get(GET_sale)
	.post(POST_sale)
	.put(PUT_sale)
	.delete(DEL_sale);

export default routes;

