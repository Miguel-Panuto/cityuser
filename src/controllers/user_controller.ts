import { Request, Response } from 'express';

import { findUserUsecase, registerUserUsecase } from '../usecases';

export default class UserController {
  async show(req: Request, res: Response) {
    try {
      const id = req.params['id'] as unknown as number;
      const user = await findUserUsecase.findUserById(id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { name, cityname, citystate } = req.query;
      const users = await findUserUsecase.findUsers(
        name as string | undefined,
        cityname as string | undefined,
        citystate as string | undefined
      );
      return res.status(200).json(users);
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, gender, birthdate, age, cityName, cityState } = req.body;
      const user = {
        fullname: name.toUpperCase(),
        gender,
        birthdate: new Date(birthdate),
        age,
      };
      const city = { name: cityName, state: cityState };
      const newUser = await registerUserUsecase.regsiterUser(user, city);
      return res.status(201).json(newUser);
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }

  async update(req: Request, res: Response) {
    try {
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }

  async delete(req: Request, res: Response) {
    try {
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }
}
