import db from './src/db';

export const dbReset = async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
};