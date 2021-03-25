import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ModalService } from 'src/app/services/modal.service';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [UsersService],
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {

  users: User[];
  title: string;
  selectedUser: number;

  constructor(
    private usersService: UsersService,
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe((users) => (this.users = users));
  }

  onCallClose(){
    this.modalService.close('modal-payment')
  }

  payUser(user) {
    this.selectedUser = user.id
    this.title = "Pagamento para " + user.name
    this.modalService.open('modal-payment')
  }
}
