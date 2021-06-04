import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../../models/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private url = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<User[]>(this.url);
  }

  get(id) {
    return this.http.get<User[]>(this.url)
    .pipe(
      map(res => {
          return res.find(user => user.id == id);
      })
    );
  }
}
