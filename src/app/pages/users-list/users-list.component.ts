import { Component, OnInit } from '@angular/core'
import { Users, GetUsersService } from '../../../services/getUsers.service'

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  // REVER TYPE DA VARIÁVEL
  // users: Users[] = []
  users: any
  isModalopen: boolean = false

  constructor(private usersService: GetUsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users
    })
  }

  handlePayment() {
    console.log('PAYMENT')
    this.isModalopen = true
  }

}
