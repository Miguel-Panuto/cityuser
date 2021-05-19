import path from 'path'

const envs = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join('dev.sqlite3'),
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: '../../test.sqlite3',
    },
    useNullAsDefault: true,
  },
};

export default envs;
