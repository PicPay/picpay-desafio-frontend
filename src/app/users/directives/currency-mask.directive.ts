import { Directive, HostListener, Input } from '@angular/core';

import {
  NG_VALUE_ACCESSOR, ControlValueAccessor
} from '@angular/forms'

@Directive({
  selector: '[appCurrencyMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CurrencyMaskDirective,
    multi: true
  }]
})
export class CurrencyMaskDirective implements ControlValueAccessor {
  onChange: any
  onTouched: any

  @Input('appCurrencyMask') appCurrencyMask: string

  writeValue(value: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    if ($event.target.value === "") {
      $event.target.value = 0
    }

    var currencyFormated = parseFloat($event.target.value).toFixed(2);
    $event.target.value = currencyFormated
  }
}
