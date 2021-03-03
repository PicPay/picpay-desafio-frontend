import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private userService: UserService) { }

  public users$: Observable<User[]>;

  @Input()
  public isSimpleCard: boolean = false;

  ngOnInit() {
    this.users$ = this.userService.getAllContacts();
  }

}
