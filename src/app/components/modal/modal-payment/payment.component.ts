import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { card } from "src/app/models/card";
import { User } from "src/app/models/user";
import { TransacaoService } from "src/app/services/transaction/transaction.service";
import { UsersService } from "src/app/services/user/users.service";
import { ModalMessage } from "../modal-message/modal-message.component";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"],
})
export class PaymentComponent implements OnInit {
  @Input() name: any;
  msg: any;
  users: User[] = [];
  paymentForm: FormGroup;
  destinationUser: any;
  valueOfTransaction: any = 0;
  cardNumber: number;
  confirmCardValid: string;
  cards: card[] = [
    {
      cardNumber: "1111111111111111",
      cvv: 789,
      expiryDate: "01/18",
    },
    {
      cardNumber: "4111111111111234",
      cvv: 123,
      expiryDate: "01/20",
    },
  ];
  cardValid: string = this.cards[0].cardNumber;
  constructor(
    public activeModal: NgbActiveModal,
    public transacaoService: TransacaoService,
    public usersService: UsersService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {

    this.valueOfTransaction = Number(
      this.valueOfTransaction.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })
    );

    this.paymentForm = this.formBuilder.group({
      valueOfTransaction: ["", Validators.required],
      selectCards: ["", Validators.required],
    });
  }

  selectCard(card: any) {
    const crt = card.value;
    this.cardNumber = crt;
    const bankCard = this.cards.find((c) => c.cardNumber == card.value);

    this.usersService.getUsers().subscribe((x) => {
      this.users = x.map((x) =>
        x.name == this.name
          ? {
              ...x,
              cardNumber: bankCard.cardNumber,
              cvv: bankCard.cvv,
              expiryDate: bankCard.expiryDate,
              value: this.valueOfTransaction.value,
              destinationUserId: x.id,
            }
          : x
      );
    });
  }

  makePayment() {
    let sucessPayment = false;
    this.destinationUser = this.users.find((x) => x.name == this.name);
    this.confirmCardValid = this.destinationUser.cardNumber;

    if (this.destinationUser) {
      if (this.confirmCardValid == this.cardValid) {
        this.transacaoService
          .realizeTransaction(this.destinationUser)
          .subscribe();
        sucessPayment = true;
      }
      this.openModal(sucessPayment);
    }
  }
  openModal(sucessPayment?: boolean) {
    const modalRef = this.modalService.open(ModalMessage);
    modalRef.componentInstance.sucessPayment = sucessPayment;
  }
}
