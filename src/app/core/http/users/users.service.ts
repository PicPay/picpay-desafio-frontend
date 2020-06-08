import { Injectable, OnInit } from "@angular/core";

import { User } from "@shared/models/user";

import { BaseService } from "../base.service";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private baseService: BaseService) {}

  getUsers() {
    return this.baseService.get<User[]>(`5d531c4f2e0000620081ddce`);
  }
}
