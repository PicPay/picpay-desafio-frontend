import { Component, Input, OnInit } from '@angular/core';
import { User } from '@shared/interfaces/user';
import { PicPayService } from '@shared/services/picpay.service';

@Component({
  selector: 'ngx-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Input() users: User[] | null = null;

  constructor(private picPayService: PicPayService) {}

  ngOnInit(): void {
    this.picPayService.users().subscribe((users: User[]) => (this.users = users));
  }
}
