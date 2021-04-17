import { IUser } from '@picpay-lib/ngx-domain';

export interface IUserApiModel {
  id: number;
  name: string;
  img: string;
  username: string;
}

export function ParseUserApiToUser(user: IUserApiModel): IUser {
  return {
    id: user.id,
    name: user.name,
    img: user.img,
    userName: user.username,
  };
}

export function ParseUserToUserApi(user: IUser): IUserApiModel {
  return {
    id: user.id,
    name: user.name,
    img: user.img,
    username: user.userName,
  };
}
