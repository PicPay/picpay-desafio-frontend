import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-button-pay',
  templateUrl: 'button-pay.component.html',
  styleUrls: ['button-pay.component.scss'],
})
export class ButtonPayComponent {
  @Output() pay = new EventEmitter();

  onPay(event: Event): void {
    this.pay.emit(event);
  }
}
