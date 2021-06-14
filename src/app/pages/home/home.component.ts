import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public loadingUsers: boolean = false;
  public users = new Array<User>();
  public usersFilter = new Array<User>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers() {
    this.loadingUsers = true;
    this.userService.listUsers().subscribe(result => {
      this.users = result;
      this.usersFilter = this.users;
      this.loadingUsers = false;
    });
  }

  search(event: string) {
    this.usersFilter = this.users.filter(function(user) {
      return user.username.toLowerCase().indexOf(event.toLowerCase()) > -1 || user.name.toLowerCase().indexOf(event.toLowerCase()) > -1
    });
  }

  trackByFn(index, item) {
    return item ? item.id : undefined;
  }
}
