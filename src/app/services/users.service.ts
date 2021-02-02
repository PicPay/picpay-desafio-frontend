import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/User";
@Injectable({
  providedIn: "root",
})
export class UsersService {
  API_URL = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }
}
