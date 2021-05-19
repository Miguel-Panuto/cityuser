import { Request, Response } from 'express';

import { registerCityUsecase } from '../usecases';

export default class CityController {
  async create(req: Request, res: Response) {
    try {
      const { city, state } = req.body;
      const cityId = await registerCityUsecase.registerCity({
        name: city,
        state,
      });
      return res.status(201).json({ cityId });
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }

  async index(req: Request, res: Response) {}
}
