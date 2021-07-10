import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/entities/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
