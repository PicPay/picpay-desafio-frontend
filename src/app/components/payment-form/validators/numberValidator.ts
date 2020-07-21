import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidator {

    static minValue(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && c.value.replace(/\D/g, '') === '0') {
                return { 'value': true };
            }
            return null;
        };
    }
}