import { Injectable } from '@angular/core';
import User from 'src/app/shared/models/user/user.model';
import { ApiService } from '../api-service/api.service';
import UserData from './user.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: UserData

  private readonly domain: string = "/v2"
  constructor(private apiService: ApiService) { 
    this.data = new UserData()
  }

  async retrieveUsers(): Promise<void> {
    let users = await this.apiService.get<Array<User>>(`${this.domain}/5d531c4f2e0000620081ddce`)
    this.data.users = users
  }

}
