import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cardMask",
})
export class CardMaskPipe implements PipeTransform {
  transform(value: string): string {
    let card: string = "XXXX";

    if (value.length > 4) {
      card = value.substr(value.length - 4);
    }

    return `Cartão com final ${card}`;
  }
}
