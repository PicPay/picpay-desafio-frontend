import { UserService } from './user.service';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  loading = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    this.userService.read().subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  payUser(user: User): void {
    this.userService.setCurrentUser(user);
    this.router.navigate(['/pagamento']);
  }

}
