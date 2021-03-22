import { User } from './user.model';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = "https://www.mocky.io/v2/5d531c4f2e0000620081ddce"
  baseUrl2 = "http://localhost:4200/users"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  read(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }

  loadById(id) {
    return this.http.get(`${this.baseUrl}/${id}`)
  }


}
