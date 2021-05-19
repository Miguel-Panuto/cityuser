import { ICity } from '../@types/interfaces';
import CityRepository from '../repositories/city_repository';

export default class RegisterCityUsecase {
  private cityRep: CityRepository;

  constructor(cityRep: CityRepository) {
    this.cityRep = cityRep;
  }

  async registerCity(city: ICity) {
    try {
      const isCityFinded = (await this.cityRep.findCity(city)) !== undefined;
      if (isCityFinded) throw 'city already created';
      return await this.cityRep.create(city);
    } catch (e) {
      throw e;
    }
  }
}
