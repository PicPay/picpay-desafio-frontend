import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: UserModel;

  constructor() { }

  ngOnInit() {
  }

}
