import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../../models/user'


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

constructor(private http: HttpClient) { }
private url = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce";

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.url);
}
}
