import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('CITY').insert([
    { name: 'COSMOPOLIS', state: 'SP' },
    { name: 'CAMPINAS', state: 'SP' },
    { name: 'LIMEIRA', state: 'SP' },
    { name: 'AMERICANA', state: 'SP' },
    { name: 'PAULINIA', state: 'SP' },
    { name: 'RIO DE JANEIRO', state: 'RJ' },
    { name: 'VITORIA', state: 'ES' },
    { name: 'PORTO SEGURO', state: 'BA' },
  ]);
}
