import { Component, OnInit } from '@angular/core';
import { User } from '@picpay-lib/ngx-domain';
import { UserService } from '@picpay-lib/ngx-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList$!: Observable<User[]>;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userList$ = this.userService.getList();
  }

  repeater(n: number): number[] {
    return [...Array(n).keys()];
  }
}
