import path from 'path'

const envs = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join('dev.sqlite3'),
    },
    useNullAsDefault: true,
  },
};

export default envs;
