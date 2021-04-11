import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../../models/user.model";
import { environment } from "../../../environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.apiUser);
  }
}
