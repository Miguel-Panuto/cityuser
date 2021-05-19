import { Request, Response } from 'express';

import { registerCityUsecase, findCitiesUsecase } from '../usecases';

export default class CityController {
  async create(req: Request, res: Response) {
    try {
      const { city, state } = req.body;
      const cityId = await registerCityUsecase.registerCity({
        name: city.toUpperCase(),
        state: state.toUpperCase(),
      });
      return res.status(201).json({ cityId });
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }

  async index(req: Request, res: Response) {
    try {
      const { city, state } = req.query;
      const cities = await findCitiesUsecase.findCities(
        (city as string) || undefined,
        (state as string) || undefined
      );
      return res.status(201).json(cities);
    } catch (e) {
      return res.status(403).json({ error: e });
    }
  }
}
