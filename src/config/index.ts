import _database from './knexfile'

export default {
  port: process.env.PORT || 8080
}

export const database = _database;