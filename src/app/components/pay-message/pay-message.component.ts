import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pay-message',
  templateUrl: './pay-message.component.html',
  styleUrls: ['./pay-message.component.scss']
})
export class PayMessageComponent implements OnInit {

  constructor() { }

  @Input() message: string;

  ngOnInit() {
  }

}
