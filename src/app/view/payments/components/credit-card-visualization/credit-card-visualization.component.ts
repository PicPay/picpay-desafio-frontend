import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { creditCard } from 'src/app/core/types/credit-card.type';

@Component({
  selector: 'app-credit-card-visualization',
  templateUrl: './credit-card-visualization.component.html',
  styleUrls: ['./credit-card-visualization.component.scss'],
})
export class CreditCardVisualizationComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private data: { card: creditCard }) {}

  get card(): creditCard {
    return this.data.card;
  }
}
