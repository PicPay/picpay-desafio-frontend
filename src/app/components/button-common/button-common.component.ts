import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.scss']
})
export class ButtonCommonComponent {
  @Input() label: string;
  @Input() type: string;
  @Input() outlined: boolean;
  @Input() rounded: boolean;
  @Input() larger: boolean;
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  onClickButton(event): void {
    this.buttonClick.emit(event);
  }
}
