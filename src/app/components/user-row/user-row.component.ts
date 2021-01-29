import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/services/api/interfaces/api.interface';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss'],
})
export class UserRowComponent implements OnInit {

  @Input() user:IUser;
  @Output() OnPagar = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit() {}

  onPagar(){
    this.OnPagar.next(this.user);
  }

}
