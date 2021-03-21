import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UsuariosService } from 'src/app/services/user/users.service';
import { PaymentComponent } from '../modal/modal-payment/payment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User [] = []
  nameUserModal : string

  constructor( private usuariosService : UsuariosService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.usuariosService.getUsers().subscribe(x =>
      {this.users = x})

  }

  open() {
    debugger
    const modalRef = this.modalService.open(PaymentComponent);
    modalRef.componentInstance.name = this.nameUserModal;
  }

  getName(nome: any) {
    this.nameUserModal = nome.value
  }
}
