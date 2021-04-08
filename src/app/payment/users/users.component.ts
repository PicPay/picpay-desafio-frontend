import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/finally';

import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  loading = { users: true, img: 'https://cdn.dribbble.com/users/1199240/screenshots/6452874/cards2.gif' };

  userList: Array<object>;
  userPayment: Array<object>;
  viewModal: boolean;

  //TODO: setar um tipo da variavel
  alert: any;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();

    // TODO: criar um componente reutilizável
    this.alert = {
      text: '',
      view: false
    };

    this.viewModal = false;
  }

  getUsers() {
    this.usersService.getUsers()
    .finally(() => {this.loading.users = false})
    .subscribe(
      success => {
        this.userList = success;
      },error => {
        this.alert.view = true;
        error.status == 404 && (this.alert.text = "Dados não encontrados.");
        error.status == 500 && (this.alert.text = "Infelizmente, tivemos um problema");
      }
    )
  }

  setUser(user){
    this.userPayment = user;
    this.viewModal = true;
  }
}
