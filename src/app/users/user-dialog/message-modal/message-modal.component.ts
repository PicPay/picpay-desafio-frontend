import { UsersService } from './../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

  constructor( private service: UsersService ) { }

  ngOnInit() {
  }

  onCloseBtn() {
    this.service.changeModalVisibility(false)
  }

}
