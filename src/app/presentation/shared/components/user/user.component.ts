import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @HostBinding('class') class = 'app-user';

  constructor() { }

  ngOnInit() {
  }

}
