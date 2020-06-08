import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CurrencyValidator {
  static minValue(value: number) {
    return function (control: AbstractControl): ValidationErrors | null {
      if ((control.value as number) < value) {
        return { minValue: true };
      }
      return null;
    };
  }
}
