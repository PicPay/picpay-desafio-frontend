import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @HostBinding('class') class = 'app-user';

  @Input() loading: boolean;
  @Input() loadCount = 1;

  items: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.items.length = this.loadCount;
  }

}
