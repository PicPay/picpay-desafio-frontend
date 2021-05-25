import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { fromEvent, merge, Observable } from 'rxjs';
import { TransactionService } from 'src/app/@core/services/http/transaction.service';
import { CreditCard } from 'src/app/@shared/models/credit-card.model';
import { User } from 'src/app/@shared/models/user.model';
import { DisplayMessage, FormValidator, ValidationMessages } from 'src/app/@shared/utils/form-validation';
import { NgxSpinnerService } from 'ngx-spinner';
import { TransactionPayload } from 'src/app/@shared/models/transaction-payload.model';

interface transitionForm  {
	value: number;
	creditCard: string
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit, AfterViewInit {
	@ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];
	
	@Input() user: User;

	@Input() cards: CreditCard[];

	@Output() transitionStatus: EventEmitter<boolean> = new EventEmitter();

	transitionForm: FormGroup;

	validationMessages: ValidationMessages;
  genericValidator: FormValidator;
	displayMessage: DisplayMessage = {};

	currencyMask = { prefix: 'R$ ', thousands: '.', decimal: ',', align: 'left' }
	
  constructor(private fb: FormBuilder, private transactionService: TransactionService, private spinner: NgxSpinnerService) { 
		this.validationMessages = {
      value: {
        required: 'Informe o valor',
      },
      creditCard: {
        required: 'Informe um cartão',
      },
		};
		
		this.genericValidator = new FormValidator(this.validationMessages);

	 }

  ngOnInit() {
		this.transitionForm = this.fb.group({
      value: ['', [Validators.required]],
      creditCard: ['', [Validators.required]],
    })

	}
	
	ngAfterViewInit(): void {
    this.listennerInputsForValidation();
  }


	private listennerInputsForValidation() {
		let controlBlurs: Observable<any>[] = this.formInputElements
			.map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

		merge(...controlBlurs).subscribe(() => {
			this.displayMessage = this.genericValidator.processMensagens(this.transitionForm);
		});
	}

	sendTransaction(): void {
		if (this.transitionForm.dirty && this.transitionForm.valid) {
			this.spinner.show();
			const form: transitionForm = this.transitionForm.value;
			const card: CreditCard = this.cards.find(card => card.card_number === form.creditCard);
			if(!card) return;			

			const body: TransactionPayload = {
				card_number: card.card_number,
				cvv: card.cvv,
				expiry_date: card.expiry_date,
				destination_user_id: this.user.id,
				value: form.value
			}

			this.transactionService.post(body).subscribe(() => {
				this.transitionForm.reset();
				this.transitionForm.get("creditCard").patchValue("");
				this.transitionStatus.emit(body.card_number !== "4111111111111234")
				this.spinner.hide();
			})
			
		}
	}
}
