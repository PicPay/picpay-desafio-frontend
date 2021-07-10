import { Component, Input } from '@angular/core';
import { User } from 'src/app/core/entities/user.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  @Input()
  users: User[] = [];

  constructor() { }

  trackByIdFn(index: number, item: User): number {
    return item.id;
  }

}
