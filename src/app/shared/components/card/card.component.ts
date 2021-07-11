import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/entities/card.model';
import { cardFlip } from '../../animations/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [cardFlip],
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;

  state: 'flipped' | 'default' = 'default';

  constructor() { }

  ngOnInit() {
  }

  onClickCard(): void {
    if (this.state === 'default') {
      this.state = 'flipped';
    } else {
      this.state = 'default';
    }
  }

}
