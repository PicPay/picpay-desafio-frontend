import { RemoteGetAllUsers } from 'src/app/data/usecases'
import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { User } from 'src/app/core/domain/models'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[]
  @Output()
  payUser: EventEmitter<User> = new EventEmitter()
  constructor(private remoteGetAllUsers: RemoteGetAllUsers) {}
  ngOnInit() {
    this.remoteGetAllUsers
      .execute('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .subscribe(
        (data) => (this.users = data),
        (err) => console.log(err)
      )
  }

  handleClick(user: User) {
    this.payUser.emit(user)
  }
}
