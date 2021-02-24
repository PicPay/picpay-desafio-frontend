import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipt-card',
  templateUrl: './receipt-card.component.html',
  styleUrls: ['./receipt-card.component.scss']
})
export class ReceiptCardComponent implements OnInit {

  constructor() { }

  @Input()
  success: boolean = false;

  ngOnInit() {
  }

}
