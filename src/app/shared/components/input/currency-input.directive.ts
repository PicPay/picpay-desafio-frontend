import { Directive, ElementRef } from "@angular/core";
import { NgModel } from "@angular/forms";

@Directive({
  selector: "input[appCurrencyInput]",
  host: {
    "[class]": "[inputDefaultClass]",
    "[class.text-gray-500]": "isIdleField()",
    "(ngModelChange)": "updateInnerValue($event)",
  },
  providers: [NgModel],
})
export class CurrencyInputDirective {
  inputDefaultClass = "w-full py-2 px-3 bg-transparent focus:outline-none";

  private innerValue: string | number = null;
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const nativeValue = Number(this.elementRef.nativeElement.value)
    this.innerValue = isNaN(nativeValue) ? 0 : nativeValue;
  }

  isIdleField() {
    const value = this.innerValue;
    return value === 0 || value === "" || value === null;
  }

  updateInnerValue(newValue) {
    this.innerValue = newValue;
  }
}
