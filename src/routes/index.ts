import { Router } from 'express';

import userRoutes from './user.routes';
import cityRoutes from './city.routes';

const routes = Router();
routes.get('/health', (req, res) => res.status(200).json({ status: 'ok' }));
routes.use(userRoutes);
routes.use(cityRoutes);

export default routes;
