import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maskCard' })
export class MaskCard implements PipeTransform {
  transform(value: string): string {
    const rest = value.substr(12, value.length);
    return `**** **** **** ${rest}`;
  }
}
