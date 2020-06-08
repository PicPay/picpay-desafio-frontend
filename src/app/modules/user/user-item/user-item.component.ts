import { Component, Input, Output, EventEmitter } from "@angular/core";
import { User } from '@shared/models/user';

@Component({
  selector: "app-user-item",
  templateUrl: "./user-item.component.html",
})
export class UserItemComponent {
  @Input() public user = {} as User;
  @Output('payClick') onClick = new EventEmitter();

  handlePayClick(event) {
    this.onClick.emit(event);
  }
}
