import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/data/types';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

  @Input() contact: User;

  constructor() { }

  ngOnInit() {
  }

}
