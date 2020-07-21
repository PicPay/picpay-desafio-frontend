import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberValidator {

    static minValue(): ValidatorFn {
        return (c: AbstractControl): { [key: string]: boolean } | null => {
            if (c.value && (Number(c.value.replace('R$ ', '')) === 0 || Number(c.value.replace('R$ ', '')) < 0.50)) {
                return { 'value': true };
            }
            return null;
        };
    }
}