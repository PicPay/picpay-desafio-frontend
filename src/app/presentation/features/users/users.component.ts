import { Component, OnInit } from '@angular/core';
import { IUsersUsecase } from '../../../core/interface/usecases/iusers-usecase';
import { UserEntity } from '../../../core/entities/user-entity';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserEntity[];
  isLoading = true;

  constructor(
    private usersUsecase: IUsersUsecase
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersUsecase
      .get()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe((res: UserEntity[]) => this.users = res);
  }

}
