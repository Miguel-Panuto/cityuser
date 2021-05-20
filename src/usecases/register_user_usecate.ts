import { parseName } from '../@types/functions';
import { ICity, IUser, IUserEntry } from '../@types/interfaces';
import CityRepository from '../repositories/city_repository';
import UserRepository from '../repositories/user_repository';

export default class RegisterUserUsecase {
  private userRep: UserRepository;
  private cityRep: CityRepository;
  private parseName: parseName;

  constructor(
    userRep: UserRepository,
    cityRep: CityRepository,
    parseName: parseName
  ) {
    this.userRep = userRep;
    this.cityRep = cityRep;
    this.parseName = parseName;
  }

  private parseUser(user: IUser): IUser {
    return {
      ...user,
      name: this.parseName(user.name),
      birthdate: new Date(user.birthdate),
      cityName: this.parseName(user.cityName as string),
    };
  }

  async regsiterUser(userEntries: IUserEntry, userCity: ICity) {
    try {
      const city = await this.cityRep.findCity(userCity);
      if (city === undefined) throw 'user city not finded';
      const user = await this.userRep.createUser({
        ...userEntries,
        id_city: city.id,
      });
      return this.parseUser(user);
    } catch (e) {
      console.log(e);
      
      throw e;
    }
  }
}
