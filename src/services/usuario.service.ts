import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from 'src/utils/constants';
import { User } from 'src/models/User';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(URLS.GET_USUARIO).pipe(catchError(() => of([])));
  }
}
