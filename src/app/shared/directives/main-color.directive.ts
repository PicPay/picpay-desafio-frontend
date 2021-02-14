import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[mainColor]'
})
export class MainColorDirective {

  @HostBinding('class.color-primary')
  get color() { return true }

}
