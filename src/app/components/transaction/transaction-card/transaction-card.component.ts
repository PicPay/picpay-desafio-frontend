import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CARDS } from 'src/app/shared/mock/card.mock';
import { User } from 'src/app/shared/models/user.model';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Utils } from 'src/app/shared/utils/utils';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.scss']
})
export class TransactionCardComponent implements OnInit {

  @Input()
  public selectedUser: User;

  @Output()
  public closePaymentModal = new EventEmitter<boolean>();

  @Output()
  public transaction = new EventEmitter<TransactionPayload>();

  public availableCards: any[] = CARDS;

  public validCardRegex: RegExp = /^[1]{16}$/;

  public formGroup = new FormGroup({
    value: new FormControl(0, [
      Validators.required
    ]),
    cardNumber: new FormControl('Selecione', [
      Validators.required
    ])
  });

  public currentUserName: string;

  public currentUserId: number;

  public selectedCard: any;

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private transactionService: TransactionService) { }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((val) => {
      let splitted = val.name.split(" ");

      this.currentUserId = val.id;

      if (splitted.length > 2) {
        let lastNameIndex = splitted.length - 1;

        this.currentUserName = `${splitted[0]} ${splitted[lastNameIndex]}`;

        return;
      } 

      this.currentUserName = val.name;
    });
  }

  onCardChanged() {
    const cardNumber = this.formGroup.controls['cardNumber'].value;

    const card = this.availableCards.find((c) => c.card_number == cardNumber);

    if (card) {
      this.selectedCard = card;
    }
  }

  getLastFourDigits(cardNumber: string): string {
    return Utils.getLastFourDigits(cardNumber);
  }

  pay(recipientUserId: number) {
    const value = this.formGroup.controls['value'].value;

    const cardNumber = this.formGroup.controls['cardNumber'].value;

    if (!this.isPaymentValid(value, cardNumber)) {
      return;
    }

    this.transactionService.payUser(recipientUserId, value).subscribe(() => {
      let card = this.availableCards.find((c) => c.card_number == cardNumber);

      let transactionPayload: TransactionPayload = {
        value: value,
        destination_user_id: recipientUserId,
        card_number: card.card_number,
        cvv: card.cvv,
        expiry_date: card.expiry_date
      };

      transactionPayload['date'] = new Date().toLocaleDateString();

      if (Math.floor(Math.random() * 2)) {
        this.toastr.success("Seu pagamento foi efetuado e aprovado com sucesso.");

        transactionPayload['success'] = true;
      }
      else {
        this.toastr.warning("Erro proposital e aleatório.", "Atenção, recrutadores!", { timeOut: 5000 });

        this.toastr.error("Houve um problema com o pagamento efetuado. Tente novamente mais tarde.");

        transactionPayload['success'] = false;
      }

      this.transactionService.updateStatement(transactionPayload, this.currentUserId);

      this.transaction.emit(transactionPayload); 
      
    });
  }

  close() {
    this.closePaymentModal.emit(true);
  }

  public disablePaymentButton() {
    return !(this.formGroup.controls['value'].value &&
      this.formGroup.controls['value'].value > 0 &&
      this.formGroup.controls['cardNumber'].value &&
      this.formGroup.controls['cardNumber'].value !== 'Selecione');
  }

  private isPaymentValid(value: number, cardNumber: string) {
    const title = "Houston, we have a problem!";

    if (!value) {
      this.toastr.error("Ei! Você não pode pagar \"nada\" para uma pessoa.", title);

      return false;
    }    

    if (!cardNumber || cardNumber.length !== 16) {
      this.toastr.error("Por favor, verifique o número disc... O cartão informado e tente novamente.", title);

      return false;
    }

    if (!this.validCardRegex.test(cardNumber)) {
      this.toastr.error("O cartão informado é inválido. :-(", title);

      return false;
    }

    return true;
  }
}
