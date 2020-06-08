import { Component, Input } from "@angular/core";
import { User } from '@shared/models/user';

@Component({
  selector: "app-user-content",
  templateUrl: "./user-content.component.html",
})
export class UserContentComponent {
  @Input() user: User

  getImageAltText() {
    return `Foto frontal de ${this.user.name}`;
  }
}

