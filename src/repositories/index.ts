import db from '../db';

import CityRepository from './city_repository';

export const cityRepository = new CityRepository(db);
