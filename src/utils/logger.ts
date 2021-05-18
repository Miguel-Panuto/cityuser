import path from 'path';
import winston from 'winston';

import { dateFormat } from './date_utils';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(
          (info) =>
            `${dateFormat(info.timestamp)} [${info.level}] - ${info.message}`
        )
      ),
    }),
    new winston.transports.File({
      filename: path.join('logs', 'info.log'),
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
          (info) =>
            `${dateFormat(info.timestamp)} [${info.level}] - ${info.message}`
        )
      ),
      maxsize: 20000,
      maxFiles: 5,
    }),
  ],
});

export default logger;
