import { HttpService } from './../../core/http/http.service';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../core/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  contacts$: Observable<User[]>;

  constructor( private http: HttpService ) { }

  ngOnInit() {
      this.contacts$ = this.http.listContacts();
  }

}
