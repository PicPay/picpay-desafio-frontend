import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersService } from './service/users.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any
  modalRef: BsModalRef;

  constructor(private usersService: UsersService, private modalService: BsModalService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data
    });
  }

  openModal(template: TemplateRef<any>, user) {
    this.modalRef = this.modalService.show(template);
  }
}
