import knex from 'knex';

import { database } from '../config';

const connection = knex(database[process.env.NODE_ENV || 'development']);
console.log(connection.client);

export default connection;

