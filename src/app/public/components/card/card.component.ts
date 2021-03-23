import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() titleField: string;
  @Output() callClose = new EventEmitter<any>();

  constructor() { 
  }

  close() {
    this.callClose.emit(null);
  }

}