import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-item-usuario',
  templateUrl: './item-usuario.component.html',
  styleUrls: ['./item-usuario.component.scss']
})
export class ItemUsuarioComponent implements OnInit {
  @Output() pagar = new EventEmitter<number>();
  @Input() usuario: User;

  constructor() { }

  ngOnInit() {
  }

  handlePagar() {
    this.pagar.emit(this.usuario.id);
  }

}
