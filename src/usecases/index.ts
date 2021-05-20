import RegisterCityUsecase from './register_city_usecase';
import FindCitiesUsecase from './find_cities_usecase';
import FindUserUsecase from './find_user_usecase';

import { cityRepository, userRepository } from '../repositories';

import { parseName } from '../utils';

export const registerCityUsecase = new RegisterCityUsecase(cityRepository);
export const findCitiesUsecase = new FindCitiesUsecase(cityRepository);
export const findUserUsecase = new FindUserUsecase(userRepository, parseName);
