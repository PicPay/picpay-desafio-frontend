import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import cards from 'src/app/models/cards.model';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @Input() user: User;
  public cards = cards;
  public form: FormGroup;
  get formControls() {
    return this.form.controls;
  }



  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      value: ['', Validators.compose([Validators.required, Validators.min(0.01)])],
      card: ['', Validators.compose([Validators.required])]
    });


  }

  public close() {
    this.activeModal.close(false);
  }

  submit() {
    this.activeModal.close(
      this.createTransaction(this.form.value)
    );
  }

  private createTransaction(formValues) {
    return {
      card_number: formValues.card.card_number,
      cvv: formValues.card.cvv,
      expiry_date: formValues.card.expiry_date,
      value: formValues.value
    }
  }

  public disableButton() {
    return !this.formControls.value.valid
  }


}
