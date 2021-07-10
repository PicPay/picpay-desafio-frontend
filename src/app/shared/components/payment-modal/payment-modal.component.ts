import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

import { UserService } from "src/app/core/services/user.service";
import { Card } from "../../model/card.model";
import { UserAccount } from "../../model/user-account.model";
import { PaymentService } from "../../services/payment.service";

@Component({
    selector: 'app-payment-modal',
    templateUrl: './payment-modal.component.html',
    styleUrls: ['./payment-modal.component.scss'],
    host: {
        '[class.open]': 'isOpen',
    }
})
export class PaymentModalComponent implements OnInit {
    @Input() id: string;
    @Input() user: UserAccount;
    @Input() isOpen: boolean;
    @Output() close = new EventEmitter();

    public isLoading = false;
    public submitted = false;
    public paymentForm: FormGroup;
    public cards$: Observable<Card[]> = this.userService.getCards();

    constructor(
        private formBuilder: FormBuilder,
        private payment: PaymentService,
        private userService: UserService
    ) { }

    ngOnInit() {
        this.initPaymentForm();
    }

    initPaymentForm() {
        this.paymentForm = this.formBuilder.group({
            paymentValue: ['', [Validators.required, Validators.min(0.01)]],
            card: [null, Validators.required],
        });
    }

    get paymentValue() {
        return this.paymentForm.get('paymentValue');
    }

    get card() {
        return this.paymentForm.get('card');
    }

    disableForm() {
        this.isLoading = true;
        this.paymentForm.disable();
    }

    enableForm() {
        this.isLoading = false;
        this.paymentForm.enable();
    }

    closeForm() {
        this.close.emit()
    }

    resetForm() {
        this.submitted = false;
        this.paymentForm.reset();
        this.enableForm();
    }

    onFormSubmit() {
        this.submitted = true;

        if (this.paymentForm.valid) {
            const { card, paymentValue } = this.paymentForm.value;
            const userDestinationID = this.user.id;
            const transaction = {
                ...card,
                value: paymentValue,
                destination_user_id: userDestinationID
            };

            this.disableForm();

            this.payment.save(transaction).subscribe(
                response => {
                    this.close.emit(response);
                },
                error => {
                    this.close.emit({ error });
                },
                () => this.resetForm()
            )
        }
    }
}
