import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Users } from "../payments/users-list/users";

const URL = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
@Injectable({ providedIn: 'root' })
export class UserListService{
    constructor(private http: HttpClient){}

    listUser(){
        return this.http.get<Users[]>(URL);
    }
}