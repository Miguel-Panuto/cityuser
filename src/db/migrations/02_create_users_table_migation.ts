import { Knex } from 'knex';

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('USERS', (table) => {
    table.increments('id').primary();
    table.string('fullname', 40).notNullable();
    table.dateTime('birthdate').notNullable();
    table.integer('age').notNullable();
    table.integer('id_city').notNullable().references('id').inTable('CITY');

    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table.dateTime('updated_at').notNullable().defaultTo(knex.fn.now());
  });

export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTable('USERS');
