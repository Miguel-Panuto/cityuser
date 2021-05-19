import { Router } from 'express';

const routes = Router();
routes.post('/user');
routes.get('/user');
routes.get('/user/:id');
routes.delete('/user/:id');
routes.put('/user/:id');

export default routes;