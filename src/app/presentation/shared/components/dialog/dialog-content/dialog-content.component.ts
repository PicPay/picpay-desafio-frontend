import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  @HostBinding('class') class = 'app-dialog-content';

  constructor() { }

  ngOnInit() {
  }

}
