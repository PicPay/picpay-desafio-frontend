import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: '[picButton]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  _transparent: boolean;

  @Input()
  iconAlign: 'start' | 'end' | 'center' = 'center';

  @Input()
  set transparent(value: boolean) {
    this._transparent = value !== null && `${value}` !== 'false';
  };

  @HostBinding('class.pic-button')
  _picButton = true;

  @HostBinding('class.pic-button--flex-start')
  _flexStart = false;

  @HostBinding('class.pic-button--flex-start')
  get start(): boolean {
    return this.iconAlign === 'start';
  }

  @HostBinding('class.pic-button--flex-end')
  get end(): boolean {
    return this.iconAlign === 'end';
  }

  @HostBinding('class.pic-button--transparent')
  get transparentBg(): boolean {
    return this._transparent;
  }
}
