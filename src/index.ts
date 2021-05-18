import server from './server';
import config from './config';

import { logger } from './utils'

server.listen(config.port, () => {
  logger.info(`SERVER RUNNING ON PORT: ${config.port}`)
})