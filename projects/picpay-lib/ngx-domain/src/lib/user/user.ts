export interface IUser {
  id: number;
  name: string;
  img: string;
  userName: string;
}

export class User implements IUser {
  id: number;
  name: string;
  img: string;
  userName: string;

  constructor(rawData: IUser) {
    this.id = rawData.id;
    this.name = rawData.name;
    this.img = rawData.img;
    this.userName = rawData.userName;
  }
}
