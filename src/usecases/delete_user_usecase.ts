import UserRepository from '../repositories/user_repository';

export default class DeleteUserUsecase {
  private userRep: UserRepository;

  constructor(userRep: UserRepository) {
    this.userRep = userRep;
  }

  async deleteUser(id: number) {
    try {
      return await this.userRep.deleteUser(id);
    } catch (e) {
      throw e;
    }
  }
}
