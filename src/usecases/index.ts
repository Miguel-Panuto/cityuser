import RegisterCityUsecase from './register_city_usecase';
import FindCitiesUsecase from './find_cities_usecase';
import FindUserUsecase from './find_user_usecase';
import RegisterUserUsecase from './register_user_usecate';
import UpdateUserNameUsecase from './update_user_name_usecase';
import DeleteUserUsecase from './delete_user_usecase';

import { cityRepository, userRepository } from '../repositories';

import { parseName } from '../utils';

export const registerCityUsecase = new RegisterCityUsecase(cityRepository);
export const findCitiesUsecase = new FindCitiesUsecase(cityRepository);
export const findUserUsecase = new FindUserUsecase(userRepository, parseName);
export const registerUserUsecase = new RegisterUserUsecase(
  userRepository,
  cityRepository,
  parseName
);
export const updateUserNameUsecase = new UpdateUserNameUsecase(
  userRepository,
  parseName
);
export const deleteUserUsecase = new DeleteUserUsecase(userRepository);
