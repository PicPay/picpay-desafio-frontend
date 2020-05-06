import { Injectable } from "@angular/core";
import { HttpService } from "src/app/services/HttpService/http.service";
import { Observable } from "rxjs";

export interface IUser {
  id: number;
  name: string;
  img: string;
  username: string;
}

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpService: HttpService) {}

  getAll(): Observable<IUser[]> {
    return this.httpService.get(`5d531c4f2e0000620081ddce`);
  }
}
