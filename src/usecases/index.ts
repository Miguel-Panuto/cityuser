import RegisterCityUsecase from './register_city_usecase';
import FindCitiesUsecase from './find_cities_usecase';

import { cityRepository } from '../repositories';

export const registerCityUsecase = new RegisterCityUsecase(cityRepository);
export const findCitiesUsecase = new FindCitiesUsecase(cityRepository);
