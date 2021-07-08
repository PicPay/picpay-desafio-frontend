import { Component, OnInit } from '@angular/core'
import { Users, GetUsersService } from '../../../services/getUsers.service'

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Users
  errorMessage: string
  userNameSelected: string
  userIdSelected: number

  constructor(private usersService: GetUsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: users => {
        this.users = users
      },
      error: error => {
        this.errorMessage = error.message
        alert(`Houver um problema, ${this.errorMessage}. Tente novamente mais tarde.`)
      }
    })
  }

  handlePayment(userName: string, userId: number) {
    this.userNameSelected = userName
    this.userIdSelected = userId

    document.querySelector('div.modal-backdrop.hidden').classList.remove('hidden')
  }

}
