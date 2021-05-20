import { Router } from 'express';
import { userController } from '../controllers';

const routes = Router();
routes.get('/user', userController.index);
routes.get('/user/:id', userController.show);
routes.post('/user', userController.create);
routes.put('/user/:id', userController.update);
routes.delete('/user/:id', userController.delete);

export default routes;
