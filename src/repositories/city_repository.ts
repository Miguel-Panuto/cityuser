import { Knex } from 'knex';
import { ICity } from '../@types/interfaces';

export default class CityRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  private bsSelect(name: string, state: string) {
    return this.db
      .select('id')
      .from('CITY')
      .where('name', 'LIKE', name)
      .andWhere('state', 'LIKE', state);
  }

  async create(city: ICity): Promise<number> {
    try {
      return await this.db
        .insert(city)
        .into('CITY')
        .then(async () => (await this.findCity(city)).id);
    } catch (e) {
      console.log(e);

      throw 'fail in create new city';
    }
  }

  async findCity(city: ICity): Promise<{ id: number }> {
    try {
      return await this.bsSelect(city.name, city.state).first();
    } catch (e) {
      throw 'fail in find city';
    }
  }

  async findCities(name: string, state: string) {
    try {
      return await this.bsSelect(`${name}%`, `${state}%`).select(
        'name',
        'state'
      );
    } catch (e) {
      throw 'fail in find cities';
    }
  }
}
