import { Component, Input, OnInit } from '@angular/core';
import { StringUtils } from 'src/app/shared/utils/stringutils';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input()
  public creditCard: any;

  @Input()
  public cardOwnerName: string;

  ngOnInit() { }

  getLastFourDigits(cardNumber: string): string {
    return StringUtils.getLastFourDigits(cardNumber);
  }
}
