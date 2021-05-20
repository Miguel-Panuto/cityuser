import _database from './database'

export default {
  port: process.env.PORT || 8080
}

export const database = _database;