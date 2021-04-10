import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/finally';

import { PayloadService } from './payload.service';
import { Payload } from './payload.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [PayloadService]
})
export class ModalComponent implements OnInit, OnChanges {

  @Input() userPayment;
  @Input() viewModal;
  
  transactionPayload: Observable<Payload[]>;
  
  cards: Array<any>;
  modal: any;
  viewLoading: boolean;

  transaction: FormGroup;
  card: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: Http, private payloadService: PayloadService) { }

  ngOnInit() {
    this.inicialValues();

    this.transaction = this.formBuilder.group({
      card_number: [null, [Validators.required, Validators.maxLength(16)]],
      cvv: [null, [Validators.required, Validators.maxLength(3)]],
      expiry_date: [null, [Validators.required]],
      destination_user_id: [null, [Validators.required]],
      value: [null, [Validators.required]]
    });

    this.card = this.formBuilder.group({
      card_number: [null, [Validators.required, Validators.maxLength(11)]],
    });
  }

  ngOnChanges() {
    if (!this.userPayment) {
      return;
    }

    this.transaction.controls['destination_user_id'].setValue(this.userPayment.id)
  }

  private inicialValues(){
    this.cards = [
      // valid card
      {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
      },
      // invalid card
      {
        card_number: '4111111111111234',
        cvv: 123,
        expiry_date: '01/20',
      },
    ];

    this.modal = {
      text: '',
      viewPayment: true,
      viewReceipt: false
    };
  }

  setCard() {
    this.cards.map(e => {
      if (e.card_number == this.card.controls['card_number'].value) {

        // set values
        this.transaction.patchValue({
          card_number: e.card_number,
          cvv: e.cvv,
          expiry_date: e.expiry_date,
        })
      }
    })
  }

  setPayment() {
    if (this.transaction.valid) {
      const endpoint = "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989";

      this.payloadService.setPayment(endpoint, JSON.stringify(this.transaction.value))
        .finally(() => { this.modal.viewPayment = false, this.modal.viewReceipt = true, this.viewLoading = false})
        .subscribe(
          sucess => {
            this.modal.text = "O pagamento foi concluido com sucesso."

            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }, error => {
            error.status == 404 && (this.modal.text = "Dados não encontrados.");
            error.status == 500 && (this.modal.text = "O pagamento <strong>não</strong> foi concluido com sucesso");
          }
        );
    }
  }

  closeModal(){
    this.viewModal = !this.viewModal;
  }
}
