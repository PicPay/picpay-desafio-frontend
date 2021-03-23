import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { uIsNumber, uRemoveAllSpaces, uReverse } from '../../../util/functions/generalUtilities';
import { BrlCurrencyMaskHelper, InputOperationConfig } from './brl-currency-mask.helper';

@Directive({
  selector: '[formControlName] [appBrlCurrencyMask]'
})
export class BrlCurrencyMaskDirective implements OnInit {
  brlCurrencyHelper: BrlCurrencyMaskHelper;

  constructor(
    private ngControl: NgControl,
    private elementRef: ElementRef<HTMLInputElement>
  ) {
    this.brlCurrencyHelper = new BrlCurrencyMaskHelper();
  }

  ngOnInit() {
    if(this.ngControl && this.ngControl.valueAccessor) {
      const currentValue = this.ngControl.value;

      const maskedValue = currentValue === 0 ? `R$ ${currentValue},00` : `R$ ${currentValue}`;
      this.ngControl.valueAccessor.writeValue(maskedValue);
    } else {
      console.error("The component which the 'BrlCurrencyMaskDirective' directive sit's on, doesn't have a control or model bound to it. Therefore, no controlValueAccessor to be used.");
    }
  }

  @HostListener('keydown', ['$event']) 
  handleKeyDown(event: KeyboardEvent) {
    event.preventDefault();

    const currentViewValue = event.target['value'] as string;
    const newKey = event.key;

    if( !uIsNumber(newKey) && newKey !== 'Backspace') {
      return false;
    }

    const viewValueUnmasked = this.brlCurrencyHelper.unmask(currentViewValue);

    let config: InputOperationConfig;
    if( uIsNumber(newKey) ) {
      config = {
        swapCommaDirection: 'backward',
        keyOperationFn: 'addKeyPressed',
        viewValue: viewValueUnmasked,
        keyPressed: newKey
      }
    } else if(newKey === 'Backspace') {
      if(viewValueUnmasked === '0,00') {
        return false;
      }
      config = {
        swapCommaDirection: 'forward',
        keyOperationFn: 'removeLastChar',
        viewValue: viewValueUnmasked,
        keyPressed: newKey
      }
    } 
    const viewValueFormatted = this.brlCurrencyHelper.handleInput(config);

    const viewValueFormattedParsed = Number(this.brlCurrencyHelper.exchangeDotComma(viewValueFormatted));
    this.ngControl.control.setValue(viewValueFormattedParsed);

    const viewValueFormattedMasked = this.brlCurrencyHelper.mask(viewValueFormatted);
    this.ngControl.valueAccessor.writeValue(viewValueFormattedMasked);
  }

}
