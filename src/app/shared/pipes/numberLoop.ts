import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberLoop' })
export class NumberLoop implements PipeTransform {
  transform(numberValue: number) {
    return new Array(numberValue).fill(null)
  }
}
