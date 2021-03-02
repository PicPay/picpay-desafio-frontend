import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'cardFinal'
})
export class CardFinalNumberPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const card = value.split('')
    const lastNumbers = card.slice(12, 16)
    return lastNumbers.reduce((a, b) => a + b)
  }
}
