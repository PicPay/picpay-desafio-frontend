import { Component } from '@angular/core';
import { User } from './models/user/user.model';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio Picpay Front-end';
  
  users : User[] = [];
  
  constructor(
    private usersService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers()
    .subscribe(users => this.users = users);
  }
}