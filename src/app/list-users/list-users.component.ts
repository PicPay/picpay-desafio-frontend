import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUsersService } from './list-users.service';
import { Users } from './users';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: Users[] ;
  users$: Observable<Users[]>;

  constructor(private service: ListUsersService) { }

  ngOnInit() {
    this.users$ = this.service.lista();
  }
  openModal() {
    alert('');
  }

}
