import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'formatCard'
})
export class FormatCard implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let newString = 'Cartão com final ' + value.substring(value.length -4)
    return newString
  }

}
