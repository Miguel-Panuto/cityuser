import CityRepository from '../repositories/city_repository';

export default class FindCitiesUsecase {
  private cityRep: CityRepository;

  constructor(cityRep: CityRepository) {
    this.cityRep = cityRep;
  }

  async findCities(name: string = '', state: string = '') {
    try {
      return await this.cityRep.findCities(name, state);
    } catch (e) {
      throw e;
    }
  }
}
