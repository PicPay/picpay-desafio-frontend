import { Component, EventEmitter } from '@angular/core';
import { PaymentStepService } from '../../payment-step.service';

@Component({
  selector: 'app-payment-select-amount',
  templateUrl: './payment-select-amout.component.html',
  styleUrls: ['./payment-select-amout.component.scss']
})
export class PaymentSelectAmoutComponent {
  value = '100';

  constructor(private paymentStep: PaymentStepService) {
    this.value = this.formatNumber(this.value);
  }

  setActiveStep() {
    this.paymentStep.setActiveStep('confirmData');
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
