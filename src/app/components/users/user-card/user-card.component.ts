import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

const placeholder: string = '/assets/img/user_placeholder.png';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  isPayableCard: boolean = true;

  showPayableCard: boolean = false;

  constructor() { }

  ngOnInit() {
    this.setPlaceholderIfImageIsInvalid();
  }

  private setPlaceholderIfImageIsInvalid(): void {
    if (this.user && !this.user.img)
      this.user.img = placeholder;
  }

}