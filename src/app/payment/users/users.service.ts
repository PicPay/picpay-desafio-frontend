import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  getUsers(){
    const endpoint = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

    return this.http.get(endpoint)
      .map((res:any) => res.json()); 
  }
}
