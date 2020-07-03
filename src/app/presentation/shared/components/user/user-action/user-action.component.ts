import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss']
})
export class UserActionComponent implements OnInit {

  @HostBinding('class') class = 'app-user-action';

  constructor() { }

  ngOnInit() {
  }

}
