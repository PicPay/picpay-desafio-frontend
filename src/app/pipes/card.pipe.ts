import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'last4Digits'
})
export class Last4DigitsPipe implements PipeTransform {

    transform(str: string): string {
        return str.slice(str.length - 4);
    }
}