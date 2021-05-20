import db from '../db';

import CityRepository from './city_repository';
import UserRepository from './user_repository';

export const cityRepository = new CityRepository(db);
export const userRepository = new UserRepository(db);
