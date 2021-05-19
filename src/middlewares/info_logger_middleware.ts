import morgan from 'morgan';

import { logger } from '../utils';

const stream = {
  write: (info: any) => {
    logger.info(info);
  },
};

morgan.format('custom', '":method :url" :status');

export default morgan('custom', {
  stream: stream,
  skip: (req, res) => res.statusCode >= 300
});
