import { Knex } from 'knex';
import { IUser } from '../@types/interfaces';

import { v4 } from 'uuid';

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
        'USERS.uuid',
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

  async createUser(user: {
    fullname: string;
    gender: string;
    birthdate: Date;
    age: number;
    id_city: number;
  }) {
    try {
      const uuid = v4();
      return await this.db
        .insert({ ...user, uuid })
        .into('USERS')
        .then(async () => await this.bsSelect().where('uuid', uuid).first());
    } catch (e) {
      throw 'fail in create user in user repository';
    }
  }

  async updateUserName(id: number, fullname: string) {
    try {
      return await this.db
        .update({ fullname, updated_at: this.db.fn.now() })
        .into('USERS')
        .where('id', id)
        .then(async () => await this.bsSelect().where('USERS.id', id).first());
    } catch (e) {
      throw 'fail in update user in user reposity';
    }
  }

  async deleteUser(id: number) {
    try {
      return await this.db
        .del()
        .into('USERS')
        .where('id', id)
        .then(() => ({
          message: 'user deleted',
          id,
        }));
    } catch (e) {
      throw 'fail in delete user in user reposity';
    }
  }
}
