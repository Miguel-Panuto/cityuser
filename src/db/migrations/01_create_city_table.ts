import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('CITY', (table) => {
    table.increments('id').primary();
    table.string('name', 60).notNullable();
    table.string('state', 2).notNullable();

    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.fn.now());
  });

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('CITY');
