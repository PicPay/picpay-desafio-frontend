import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/shared/animations/fade.animations';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.scss'],
  animations: [fadeIn]
})
export class PaymentConfirmationComponent implements OnInit {
  value = '100';
  disabled = true;

  constructor() {
    this.value = this.formatNumber(this.value);
  }

  ngOnInit() {
  }

  handleValueEdition() {
    this.disabled = !this.disabled;
  }

  formatNumber = (n: string) => {
    let t = n.replace(/[\D]+/g,'')
    t = t.replace(/([0-9]{2})$/g, ",$1");

    if (n.length > 6) {
      t = t.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    return `R$ ${t}`;
  }

  teste(n) {
    console.log( 'porra', n.value)
    this.value = this.formatNumber(n.value);
  }
}
