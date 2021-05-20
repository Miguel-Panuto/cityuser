import { parseName } from '../@types/functions';
import { IUser } from '../@types/interfaces';
import UserRepository from '../repositories/user_repository';

export default class FindUserUsecase {
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

  async findUserById(id: number) {
    try {
      const user = await this.userRep.findUserById(id);
      if (user === undefined) throw 'user not finded';
      return this.parseUser(user);
    } catch (e) {
      throw e;
    }
  }

  async findUsers(
    name: string = '',
    cityName: string = '',
    cityState: string = ''
  ) {
    try {
      return (
        await this.userRep.findUsers(
          name.toUpperCase(),
          cityName.toUpperCase(),
          cityState.toUpperCase()
        )
      ).map((user) => this.parseUser(user));
    } catch (e) {
      throw e;
    }
  }
}
