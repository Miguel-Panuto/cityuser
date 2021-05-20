import { Knex } from 'knex';

const randomNumber = () =>
  Math.floor(Math.random() * (8 - 1 + 1) + 1);

const randomDate = () => {
  const start = new Date('1922-01-01');
  const end = new Date('2005-12-31');
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const createBirth = () => {
  const birthdate = randomDate();
  const age = Date.now() - birthdate.getTime();
  const ageDate = new Date(age);
  return { birthdate, age: Math.abs(ageDate.getUTCFullYear() - 1970) };
};

export async function seed(knex: Knex): Promise<void> {
  await knex('USERS').insert([
    { ...createBirth() ,fullname: 'MIGUEL PANUTO', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'MARCOS PANUTO', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'MICAELA CUNHA', gender: 'F', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'VICTOR REIS', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'GABRIEL PASQUALINI', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'VITOR DANIEL', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'GABRIELA SILVA', gender: 'F', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'ISABELA DANTAS', gender: 'F', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'CARLA DA CRUZ', gender: 'F', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'JORGE SILVEIRA', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'GABRIEL BALSANTE', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'PEDRO RICE', gender: 'M', id_city: randomNumber() },
    { ...createBirth() ,fullname: 'VINICIUS MILANI', gender: 'M', id_city: randomNumber() },
  ]);
}
