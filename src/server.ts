import express from 'express';
import cors from 'cors';

import { infoLoggerMiddleware, errorLoggerMiddleware } from './middlewares';
import routes from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(infoLoggerMiddleware);
server.use(errorLoggerMiddleware);
server.use('/api/v1', routes);

export default server;
