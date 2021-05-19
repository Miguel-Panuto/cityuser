import { Router } from 'express';
import { cityController } from '../controllers';

const routes = Router();
routes.post('/city', cityController.create);
routes.get('/city', cityController.index);

export default routes;
