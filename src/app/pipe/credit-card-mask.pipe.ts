import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    const _number = value.toString()
    return `**** **** **** ${_number.substring(_number.length-4,_number.length)}`
  }
}
