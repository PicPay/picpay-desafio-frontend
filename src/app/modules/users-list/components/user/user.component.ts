import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import User from 'src/app/shared/models/user/user.model';


@Component({
  selector: 'pp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User
  @Output() selectedRecipient = new EventEmitter<User>()

  constructor() {
   }

  ngOnInit() {
  }

  onUserClicked(user: User){
    this.selectedRecipient.emit(user)
  }

}
