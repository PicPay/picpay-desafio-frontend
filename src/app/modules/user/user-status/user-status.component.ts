import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user-status",
  templateUrl: "user-status.component.html",
})
export class UserStatusComponent {
  @Input() figureSrc: string;
  @Input() figureAlt: string;

  @Input() title: string;
  @Input() description: string;
}
