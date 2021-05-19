const envs = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: '../../dev.sqlite3',
    },
    migrations: {
      tableName: 'migrations',
      directory: '../db/migrations',
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
