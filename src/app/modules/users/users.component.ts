import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsersService } from 'src/app/core/http';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../styles/users.scss']
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
