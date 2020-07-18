import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask'
})
export class MaskNumber implements PipeTransform {

  transform(value: string, type: string = 'maskNumber'): string {
    const lastFour = value.substr(value.length - 4);
    if (type === 'lastFour') {
      return lastFour;
    }
    return `**** **** **** ${lastFour}`;
  }

}
