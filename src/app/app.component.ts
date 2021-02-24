import { Component } from '@angular/core';
import { User } from './shared/models/user.model';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Desafio Picpay Front-end';

  public currentUser: User;

  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe((val) => this.currentUser = val);
  }
}
