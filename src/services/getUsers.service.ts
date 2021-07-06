import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

const urlBase = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'

export interface Users {
  id: number
  name: string
  img: string
  username: string
}

@Injectable({
  providedIn: 'root'
})

export class GetUsersService  {

  constructor (private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(`${urlBase}`)
  }

}