import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'pp-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User
  @Output() userSelected = new EventEmitter<User>()

  constructor() {
   }

  ngOnInit() {
  }

}
