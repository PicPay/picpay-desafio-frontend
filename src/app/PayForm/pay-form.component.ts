import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PayFormService } from '../services/pay-form.service';

export interface TransactionPayload {
    card_number: string;
    cvv: number;
    expiry_date: string;
    destination_user_id: number;
    value: number;
}

@Component({
    selector: 'app-pay-form',
    templateUrl: './pay-form.component.html',
    styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements OnInit {
    payment: TransactionPayload;
    transactionSucess: boolean;

    constructor(private payformService: PayFormService) { }
    @Output() changeEvent = new EventEmitter<boolean>();

    ngOnInit() {
        this.changeEvent.emit(false);
        this.transactionSucess = true;
    }

    cards = [
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

    cartoes = ["Cartão com final " + this.cards[0].card_number.slice(-4), "Cartão com  final " + this.cards[1].card_number.slice(-4)];

    submitted = false;

    onSubmit() {
        this.submitted = true;
        this.changeEvent.emit(true);
        this.payformService.doPayment(this.payment).subscribe((
            (response) => console.log(response)  //Nós sabemos que a API retorna sempre sucess, mas mesmo assim achei melhor deixar o output em vista :)
        ))
    }

}