import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[skeleton]'
})
export class SkeletonDirective {

  @HostBinding('class.skeleton')
  get skeleton() {
    return this._loading === true;
  }

  @Input()
  set loading(value) {
    this._loading = value !== null && `${value}` !== 'false';
  }

  private _loading: boolean;

}
