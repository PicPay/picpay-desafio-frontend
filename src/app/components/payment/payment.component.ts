import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import { takeWhile } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { Response } from 'src/app/models/response';
import { ModalAlertComponent } from '../modal-alert/modal-alert.component';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  private isAlive = true;
  user: User;
  selectedCard: Card;
  cards: Card[] = [
    {
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    },
    {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    },
  ];

  paymentForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private serverService: ServerService
  ) {}

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      card_number: [],
      cvv: [],
      expiry_date: [],
      destination_user_id: [],
      value: [
        null,
        [Validators.required, Validators.min(10), Validators.max(10000)],
      ],
    });

    if (this.user) {
      this.control.destination_user_id.setValue(this.user.id);
    }
  }

  submit() {
    this.submitted = true;
    this.loading = true;

    if (this.paymentForm.invalid || !this.selectedCard) {
      this.loading = false;
      return;
    }

    this.paymentForm.patchValue(this.selectedCard);

    this.serverService
      .postPayment(this.paymentForm.value)
      .pipe(takeWhile(() => this.isAlive))
      .subscribe(
        (resp) => {
          this.loading = false;
          this.bsModalRef.hide();

          // Codigo para realizar teste para um cartão inválido!
          if (this.selectedCard.card_number === '4111111111111234') {
            resp = {
              status: 'Reprovada',
              success: false,
            };
          }

          this.openAlert(resp);
        },
        (error) => {
          this.loading = false;
          this.bsModalRef.hide();
        }
      );
  }

  ngOnDestroy() {
    this.isAlive = false;
  }

  toggleCard(card) {
    this.selectedCard = card;
  }

  openAlert(data: Response) {
    this.modalService.show(ModalAlertComponent, {
      initialState: { data },
      ignoreBackdropClick: true,
      animated: false,
    });
  }

  get control() {
    return this.paymentForm.controls;
  }
}
