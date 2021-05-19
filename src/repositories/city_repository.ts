import { Knex } from 'knex';
import { ICity } from '../@types/interfaces';

export default class CityRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async create(city: ICity): Promise<number> {
    try {
      return await this.db
        .insert(city)
        .into('CITY')
        .then(async () => (await this.findCity(city)).id);
    } catch (e) {
      throw 'fail in create new city';
    }
  }

  async findCity(city: ICity): Promise<{ id: number }> {
    try {
      return await this.db
        .select('id')
        .from('CITY')
        .where('name', city.name)
        .andWhere('state', city.state)
        .first();
    } catch (e) {
      console.log(e);
      
      throw 'fail in find city';
    }
  }
}
