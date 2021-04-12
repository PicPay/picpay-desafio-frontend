import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../service/user.service";

@Component({
  selector: "app-payment-modal",
  templateUrl: "./payment-modal.component.html",
  styleUrls: ["./payment-modal.component.scss"],
})
export class PaymentModalComponent implements OnInit {
  @Input() cards: Card[];
  @Input() user: User;
  @Output() aprovedTransaction = new EventEmitter<boolean>();
  @Output() closeModal = new EventEmitter<boolean>();

  formGroup: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service: UserService) {}

  createTransaction() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      console.log(this.formGroup.controls);
      console.log("invalido");
    } else {
      var card = this.cards.filter(
        (cards) =>
          cards.card_number == this.formGroup.get("card_selected").value
      );

      var transactionResult: TransactionPayload = {
        value: this.formGroup.get("value").value,
        card_number: card[0].card_number,
        cvv: card[0].cvv,
        expiry_date: card[0].expiry_date,
        destination_user_id: this.user.id,
      };
      this.service.sendTransaction(transactionResult).subscribe(
        (success) => console.log("sucesso"),
        (error) => console.log(error),
        () => console.log("request completo")
      );
      //verifica se usou o cartão valido
      this.aprovedTransaction.emit(card[0].card_number == "1111111111111111");
    }
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      value: [null, [Validators.required, Validators.min(1)]],
      card_selected: [null, Validators.required],
    });
  }

  get f() {
    return this.formGroup.controls;
  }

  toCloseModal() {
    this.closeModal.emit(true);
  }
}
