import { parseName } from '../@types/functions';
import { IUser } from '../@types/interfaces';
import UserRepository from '../repositories/user_repository';

export default class UpdateUserNameUsecase {
  private userRep: UserRepository;
  private parseName: parseName;

  constructor(userRep: UserRepository, parseName: parseName) {
    this.userRep = userRep;
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

  async updateUser(id: number, name: string) {
    try {
      return this.parseUser(
        await this.userRep.updateUserName(id, name.toUpperCase())
      );
    } catch (e) {
      throw e;
    }
  }
}
