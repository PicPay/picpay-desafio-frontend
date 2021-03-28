import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../data/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  contacts$: Observable<User[]>

  constructor( private service: UsersService ) { }

  ngOnInit() {
      this.contacts$ = this.service.listContacts();
  }

}
