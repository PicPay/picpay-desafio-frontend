import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { ModalService } from '../../modal.service';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() users: User[] = [];
  // showDialog

  constructor(private userService: UserService, private modalService: ModalService) { }

  ngOnInit() {
    this.userService
      .listUser()
      .subscribe(users => this.users = users);
  }

  // openModal() {
  //   console.log('abriu modal');
  //   this.showDialog = !this.showDialog
  //   console.log('saiu modal');
  // }

  // openModal() {
  //   this.modalService.open(ModalComponent);
  // }

  // openModal() {
  //   const modalRef = this.modalService.open(
  //     ModalComponent, 
  //     { title: 'My dynamic title', 
  //       // input valor transferência?
  //       // select cartão?
  //       message: 'My dynamic message' }
  //   );

  //   modalRef.onResult().subscribe();
  // }

  // openModal(id: string) {
  //   this.modalService.open(id);
  // }
}
