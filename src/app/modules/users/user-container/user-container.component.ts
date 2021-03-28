import { DialogService } from './../../dialog/dialog.service';
import { UsersService } from '../users.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/types';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  @Input() contact: User;

  constructor(
    private modalService: DialogService,
    private userService: UsersService
    ) { }

  ngOnInit() {
  }

  onPayBtn() {
    this.modalService.changeModalVisibility(true);
    this.modalService.changePaymentVisibility(true);
    this.userService.changeDestinationUser(this.contact);
  }

}
