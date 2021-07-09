import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateX(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ],
})
export class CardComponent implements OnInit {

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
