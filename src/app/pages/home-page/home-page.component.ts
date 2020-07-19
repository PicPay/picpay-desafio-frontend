import { Component, OnInit, OnDestroy } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  usersList = [] as Users[];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.getListOfUsers();
  }

  private getListOfUsers() {
    this.subscriptions.add(
      this.usersService.getListOfUsers().subscribe((response) => {
        this.handleListOfUsersResponse(response);
      }),
    );
  }

  private handleListOfUsersResponse(response: Users[]) {
    if (response && response.length) {
      this.usersList = response;
    } else {
      alert('Houve um erro com sua requisição');
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
