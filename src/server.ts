import express from 'express';
import cors from 'cors';

import { infoLoggerMiddleware, errorLoggerMiddleware } from './middlewares';

const server = express();

server.use(cors());
server.use(infoLoggerMiddleware);
server.use(errorLoggerMiddleware);

export default server;
