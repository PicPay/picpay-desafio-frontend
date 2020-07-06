import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFilter'
})
export class CardFilterPipe implements PipeTransform {

  transform(value: any): any {
    return value.substr(value.length - 3);
  }

}
