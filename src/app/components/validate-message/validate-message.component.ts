import { Component, Input } from "@angular/core";

@Component({
  selector: 'validate-message',
  templateUrl: './validate-message.component.html',
  styleUrls: ['./validate-message.component.scss']
})
export class ValidateMessage {
  @Input() text = ''
}
