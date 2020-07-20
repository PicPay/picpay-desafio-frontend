import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformCardNumber'
})
export class TransformCardNumber implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.substring(value.length - 4, value.length);
  }
}
