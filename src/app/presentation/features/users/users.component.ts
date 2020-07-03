import { Component, OnInit } from '@angular/core';
import { IUsersUsecase } from '../../../core/interface/usecases/iusers-usecase';
import { UserEntity } from '../../../core/entities/user-entity';
import { finalize } from 'rxjs/operators';
import { DialogService } from '../../shared/components/dialog/dialog.service';
import { PaymentComponent } from '../../shared/components';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: UserEntity[];
  isLoading = true;

  constructor(
    private usersUsecase: IUsersUsecase,
    private dialogService: DialogService
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

  openPayment(user: UserEntity) {
    this.dialogService.openPayment(user, {
      component: PaymentComponent
    });
  }

}
