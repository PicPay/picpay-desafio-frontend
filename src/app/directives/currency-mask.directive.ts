import { Directive, HostListener, Input, OnInit, ElementRef } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor
} from '@angular/forms';
@Directive({
  selector: '[currencyMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CurrencyMaskDirective,
    multi: true
  }]
})
export class CurrencyMaskDirective implements ControlValueAccessor, OnInit {
  onChange = (value:any) => {};
  onTouched = () => {};

  decimalSeparator: string;
  thousandSeparator: string;
  prefix: string;

  @Input('currencyMask') mask: any;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.decimalSeparator = this.mask.decimal || ',';
    this.thousandSeparator = this.mask.thousand || '.';
    this.prefix = this.mask.prefix || '';
  }

  writeValue(value: any): void {
    if (value) {
      if (!isNaN(value)) {
        value = value.toFixed(2);
      }
      this.el.nativeElement.value = this.applyMask(String(value));
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event']) 
  onKeyup($event: any) {

    let value: string = this.applyMask($event.target.value);

    if (value === '') {
      this.onChange('');
      $event.target.value = '';
      return;
    }

    if (this.decimalSeparator === ',') {
      this.onChange(value.replace(/\./g, '').replace(',', '.'));
    } else {
      this.onChange(value.replace(/\,/g, ''));
    }

    $event.target.value = value;
  }
 
  applyMask(valueConverter: string): string {
    let numValue = parseInt(valueConverter.replace(/\D/g, ''), 10);
    let valueMask = '';
    let value: string;

    if (isNaN(numValue)) {
      return '';
    }

    value = numValue.toString();
    switch (value.length) {
       case 1:
         valueMask = '0' + this.decimalSeparator + 
           '0' + value;
         break;
       case 2:
         valueMask = '0' + this.decimalSeparator + value;
         break;
       case 3:
         valueMask = value.substr(0, 1) + this.decimalSeparator + 
           value.substr(1, 2);
         break;
       default:
         break;
     }

    if (valueMask === '') {
      let sepThousand= 0;
      for (let i = (value.length - 3); i >= 0; i--) {
        if (sepThousand=== 3) {
          valueMask = this.thousandSeparator + valueMask;
          sepThousand= 0;
        }
        valueMask = value.charAt(i) + valueMask;
        sepThousand++;
      }
      valueMask = valueMask + this.decimalSeparator + 
        value.substr(value.length - 2, 2);
    }
    
    if (this.prefix !== '') {
      valueMask = this.prefix + ' ' + valueMask;
    }
    
    return valueMask;
  }

}
