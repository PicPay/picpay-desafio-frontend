import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: Http) { }

  getUsers(){
    return this.http.get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
      .map((res:any) => res.json()); 
  }
}
