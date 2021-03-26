import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-button-pay',
  templateUrl: 'button-pay.component.html',
  styleUrls: ['button-pay.component.scss'],
})
export class ButtonPayComponent {
  @Output() pay = new EventEmitter();
}
