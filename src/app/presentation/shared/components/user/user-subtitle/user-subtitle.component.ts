import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-user-subtitle',
  templateUrl: './user-subtitle.component.html',
  styleUrls: ['./user-subtitle.component.scss']
})
export class UserSubtitleComponent implements OnInit {

  @HostBinding('class') class = 'app-user-subtitle';

  constructor() { }

  ngOnInit() {
  }

}
