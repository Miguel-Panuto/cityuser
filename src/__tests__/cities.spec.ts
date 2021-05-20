import { registerCityUsecase, findCitiesUsecase } from '../usecases';
import db from '../db';
import { dbReset } from '../../reset_tables';
import { cityRepository } from '../repositories';

test('should register city', async () => {
  try {
    await dbReset();
    const cityId = await registerCityUsecase.registerCity({
      name: 'GOIANIA',
      state: 'GO',
    });
    expect(cityId).toBe(9);
  } catch (e) {
    throw 'error';
  }
});

test('find cities by state', async () => {
  try {
    await dbReset();
    const cities = await findCitiesUsecase.findCities('', 'SP');
    expect(cities.length).toBe(5);
  } catch (e) {
    throw e;
  }
});

test('find specific city', async () => {
  try {
    await dbReset();
    const cityId = await cityRepository.findCity({
      name: 'COSMOPOLIS',
      state: 'SP',
    });
    expect(cityId.id).toBe(1);
  } catch (e) {
    throw e;
  }
});
