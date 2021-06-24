import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-item-usuario',
  templateUrl: './item-usuario.component.html',
  styleUrls: ['./item-usuario.component.scss']
})
export class ItemUsuarioComponent implements OnInit {
  @Input() usuario: User;

  constructor() { }

  ngOnInit() {
  }

}
