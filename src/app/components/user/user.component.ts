import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;

  @Output() openModal = new EventEmitter<User>();

  constructor() {
  }

  ngOnInit() {
  }

  openModalTransaction(user: User): void {
    this.openModal.emit(user);
  }
}
