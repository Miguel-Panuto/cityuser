import { Knex } from 'knex';
import { IUser } from '../@types/interfaces';

export default class UserRepository {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  private bsSelect() {
    return this.db
      .select(
        'USERS.id AS id',
        'USERS.fullname AS name',
        'USERS.gender',
        'USERS.birthdate',
        'USERS.age',
        'CITY.name AS cityName',
        'CITY.state AS cityState'
      )
      .from('USERS')
      .leftJoin('CITY', 'CITY.id', 'USERS.id_city');
  }

  async findUserById(id: number): Promise<IUser> {
    try {
      return await this.bsSelect().where('USERS.id', id).first();
    } catch (e) {
      throw 'fail in find user';
    }
  }

  async findUsers(name: string, cityName: string, cityState: string) {
    try {
      return await this.bsSelect()
        .where('USERS.fullname', 'LIKE', `${name}%`)
        .andWhere('CITY.name', 'LIKE', `${cityName}%`)
        .andWhere('CITY.state', 'LIKE', `${cityState}%`);
    } catch (e) {
      throw 'fail in find users repository';
    }
  }
}
