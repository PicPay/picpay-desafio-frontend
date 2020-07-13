import { AbstractControl, ValidatorFn } from '@angular/forms';

/**
 * Custom form validation for minimum value using Angular Validator functions
 * @param min     - minimum acceptable value
 *
 * @return amount - Boolean variable containing the validation result
 */
export function checkMinAmount(min: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value && (isNaN(c.value) || c.value < min)) {
      return {amount: true};
    }
    return null;
  };
}

/**
 * Custom form validation for zero value using Angular Validator functions
 *
 * @return hasvalue - Boolean variable containing the validation result
 */
export function checkIfValueIsZero(): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value && c.value > 0) {
      return null;
    }

    return {hasvalue: true};
  };
}
