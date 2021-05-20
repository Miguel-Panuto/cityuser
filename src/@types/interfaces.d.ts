export interface ICity {
  name: string;
  state: string;
}

export interface IUser {
  id?: number;
  name: string;
  gender: string;
  birthdate: Date;
  age: number;
  cityName?: string;
  cityState?: string;
  uuid?: string;
}

export interface IUserEntry {
  fullname: string;
  gender: string;
  birthdate: Date;
  age: number;
}
