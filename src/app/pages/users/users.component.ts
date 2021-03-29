import { Component, Input, OnInit } from '@angular/core';
import { User } from '@shared/interfaces/user';
import { PicPayStore } from '@stores/picpay.store';

@Component({
  selector: 'ngx-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Input() users: User[] | null = null;

  constructor(private picPayStore: PicPayStore) {}

  ngOnInit(): void {
    this.picPayStore.loadUsers().subscribe((users: User[]) => (this.users = users));
  }
}
