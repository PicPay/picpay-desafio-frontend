import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  @Input() user : User;
  constructor() { }

  ngOnInit() {
  }

}
