import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-title',
  templateUrl: './user-title.component.html',
  styleUrls: ['./user-title.component.scss']
})
export class UserTitleComponent implements OnInit {

  @HostBinding('class') class = 'app-user-title';

  constructor() { }

  ngOnInit() {
  }

}
