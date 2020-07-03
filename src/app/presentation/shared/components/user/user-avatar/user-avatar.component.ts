import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  @HostBinding('class') class = 'app-user-avatar';

  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

}
