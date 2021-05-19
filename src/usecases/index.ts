import RegisterCityUsecase from './register_city_usecase';

import { cityRepository } from '../repositories';

export const registerCityUsecase = new RegisterCityUsecase(cityRepository);
