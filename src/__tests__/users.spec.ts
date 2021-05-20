import { dbReset } from '../../reset_tables';
import {
  registerUserUsecase,
  findUserUsecase,
  updateUserNameUsecase,
  deleteUserUsecase,
} from '../usecases';
import { userRepository } from '../repositories';

test('register a user into database', async () => {
  try {
    await dbReset();
    const user = await registerUserUsecase.regsiterUser(
      {
        fullname: 'MIGUEL COUTINHO PANUTO',
        age: 22,
        birthdate: new Date('1999-03-01'),
        gender: 'M',
      },
      { name: 'COSMOPOLIS', state: 'SP' }
    );
    expect({
      id: user.id,
      name: user.name,
      gender: user.gender,
      age: user.age,
      birthdate: user.birthdate,
      cityName: user.cityName,
      cityState: user.cityState,
    }).toStrictEqual({
      id: 14,
      name: 'Miguel C. Panuto',
      gender: 'M',
      birthdate: new Date('1999-03-01'),
      age: 22,
      cityName: 'Cosmopolis',
      cityState: 'SP',
    });
  } catch (e) {
    throw e;
  }
});

test('find users', async () => {
  try {
    await dbReset();
    const users = await findUserUsecase.findUsers();
    expect(users.length).toBe(13);
  } catch (e) {
    throw e;
  }
});

test('find user by id', async () => {
  try {
    await dbReset();
    const user = await findUserUsecase.findUserById(1);

    expect({ id: user.id, name: user.name, gender: user.gender }).toStrictEqual(
      {
        id: 1,
        name: 'Miguel Panuto',
        gender: 'M',
      }
    );
  } catch (e) {
    throw e;
  }
});

test('update user name', async () => {
  try {
    await dbReset();
    const user = await updateUserNameUsecase.updateUser(
      1,
      'MIGUEL COUTINHO PANUTO'
    );

    expect({ id: user.id, name: user.name, gender: user.gender }).toStrictEqual(
      {
        id: 1,
        name: 'Miguel C. Panuto',
        gender: 'M',
      }
    );
  } catch (e) {
    throw e;
  }
});

test('delete user name', async () => {
  try {
    await dbReset();
    const deletedUser = await deleteUserUsecase.deleteUser(1);
    const user = await userRepository.findUserById(deletedUser.id);

    expect(user).toStrictEqual(undefined);
  } catch (e) {
    throw e;
  }
});
