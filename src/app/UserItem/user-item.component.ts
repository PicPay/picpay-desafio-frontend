import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user-item.service';
import { ModalService } from '../services/modal.service';

export interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent implements OnInit {
  user = {} as User;
  users: User[];
  feedbackModal: boolean;

  constructor(private userService: UserService, private modalService: ModalService) { }

  ngOnInit() {
    this.getUsers();
    this.feedbackModal = false;
  }

  onDataChange(feedbackModal) {
    this.feedbackModal = feedbackModal;
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  openModal(id: string) {
    this.feedbackModal = false;
    const parseId = 'modal-' + id;
    this.modalService.open(parseId);
  }

  closeModal(id: string) {
    const parseId = 'modal-' + id;
    this.modalService.close(parseId);
  }

}
