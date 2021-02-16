import { Component, Input } from '@angular/core';
import { creditCard } from 'src/app/core/types/credit-card.type';
import { DataFormatService } from 'src/app/data/utils/data-format.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent {
  constructor(private dataFormat: DataFormatService) {}

  @Input()
  cardInformation: creditCard;

  get card(): creditCard {
    return this.cardInformation;
  }

  get cardNumberFormatted(): string {
    return this.dataFormat.addCreditCardNumberSpaces(this.cardInformation.card_number);
  }
}
