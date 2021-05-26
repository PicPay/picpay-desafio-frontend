import { HttpErrorResponse } from "@angular/common/http";
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChildren,
} from "@angular/core";
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from "@angular/forms";
import { TransactionService } from "@core/services/http/transaction.service";
import { CreditCard } from "@shared/models/credit-card.model";
import { TransactionPayload } from "@shared/models/transaction-payload.model";
import { User } from "@shared/models/user.model";
import {
  DisplayMessage,
  FormValidator,
  ValidationMessages,
} from "@shared/utils/form-validation";
import { NgxSpinnerService } from "ngx-spinner";
import { fromEvent, merge, Observable } from "rxjs";
import { Response } from "./../../../../@shared/models/response.model";

interface transitionForm {
  value: number;
  creditCard: string;
}

@Component({
  selector: "app-transaction",
  templateUrl: "./transaction.component.html",
  styleUrls: ["./transaction.component.scss"],
})
export class TransactionComponent implements OnInit, AfterViewInit {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  @Input() user: User;

  @Input() cards: CreditCard[];

  @Output() transitionStatus: EventEmitter<boolean> = new EventEmitter();

  transitionForm: FormGroup;

  validationMessages: ValidationMessages;
  genericValidator: FormValidator;
  displayMessage: DisplayMessage = {};

  currencyMask = { prefix: "R$ ", thousands: ".", decimal: ",", align: "left" };

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private spinner: NgxSpinnerService
  ) {
    this.validationMessages = {
      value: {
        required: "Informe o valor",
      },
      creditCard: {
        required: "Informe um cartão",
      },
    };

    this.genericValidator = new FormValidator(this.validationMessages);
  }

  ngOnInit() {
    this.transitionForm = this.fb.group({
      value: ["", [Validators.required]],
      creditCard: ["", [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    this.listennerInputsForValidation();
  }

  private listennerInputsForValidation() {
    let controlBlurs: Observable<any>[] = this.formInputElements.map(
      (formControl: ElementRef) => fromEvent(formControl.nativeElement, "blur")
    );

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMensagens(
        this.transitionForm
      );
    });
  }

  sendTransaction(): void {
    if (this.transitionForm.dirty && this.transitionForm.valid) {
      this.spinner.show();
      const form: transitionForm = this.transitionForm.value;
      const card: CreditCard = this.cards.find(
        (card) => card.card_number === form.creditCard
      );
      if (!card) return;

      const body: TransactionPayload = {
        card_number: card.card_number,
        cvv: card.cvv,
        expiry_date: card.expiry_date,
        destination_user_id: this.user.id,
        value: form.value,
      };

      this.transactionService.post(body).subscribe(
        (success: Response) => this.processResponse(success),
        (fail: HttpErrorResponse) => {
          const respose: Response = fail.error;
          this.processResponse(respose);
        }
      );
    }
  }

  processResponse(response: Response): void {
		
    this.transitionForm.reset();
    this.transitionForm.get("creditCard").patchValue("");
    this.transitionStatus.emit(response.success);
    this.spinner.hide();
  }
}
