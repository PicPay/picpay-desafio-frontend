import { TranslateService } from '@ngx-translate/core';
import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { FormControlValidatorService } from '@core/services/form-control-validator/form-control-validator.service';
import { MOCK_TRANSACTION_FORM_DATA } from '@shared/mocks/transaction/transaction-form.mock';
import { SharedModule } from '@shared/shared.module';
import {
  TransactionForm,
  TransactionFormModalComponent,
} from './transaction-form-modal.component';
import { TRANSACTION_FORM_VOCABULARY } from './transaction-form-modal.component.vocabulary';

describe('TransactionFormModalComponent', () => {
  let component: TransactionFormModalComponent;
  let fixture: ComponentFixture<TransactionFormModalComponent>;
  let debugElement: DebugElement;

  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<TransactionForm>>;

  let translateService: TranslateService;

  let formControlValidatorService: FormControlValidatorService;

  const fieldPropNameValue = 'value';
  const fieldPropNameCardNumber = 'card_number';
  const fieldName = 'Valor';

  beforeEach(async(() => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', [
      'close',
      'afterClosed',
    ]);
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        TranslateService,
        FormControlValidatorService,
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: MOCK_TRANSACTION_FORM_DATA },
      ],
    })
      .compileComponents()
      .then(() => {
        translateService = TestBed.get(TranslateService);
        formControlValidatorService = TestBed.get(FormControlValidatorService);
        fixture = TestBed.createComponent(TransactionFormModalComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        fixture.detectChanges();
      });
  }));

  it('should create transaction form modal component', () => {
    expect(component).toBeTruthy();
  });

  it('should retrive the last four card numbers', () => {
    const lastForNumbers = component.getLastFourNumbers(
      MOCK_TRANSACTION_FORM_DATA.card_number
    );
    expect(lastForNumbers.length).toBe(4);
  });

  it('should build form with datas on initialize the transaction form modal component', fakeAsync(() => {
    expect(component.transactionForm.get(fieldPropNameValue)).toBeTruthy();
    expect(component.transactionForm.get(fieldPropNameCardNumber)).toBeTruthy();

    expect(component.transactionForm.get(fieldPropNameValue).value).toBe(
      MOCK_TRANSACTION_FORM_DATA.value
    );
    expect(component.transactionForm.get(fieldPropNameCardNumber).value).toBe(
      MOCK_TRANSACTION_FORM_DATA.card_number
    );

    const inputValue = debugElement.queryAll(By.css('input'));
    expect(inputValue[0].attributes.formControlName).toEqual(
      fieldPropNameValue
    );

    expect(
      inputValue[0].nativeNode.value.replace('R$ ', '').replace(',', '.')
    ).toContain(MOCK_TRANSACTION_FORM_DATA.value);

    fixture.detectChanges();

    const selectInputCardNumber = debugElement.queryAll(
      By.css('.mat-select-value-text span')
    );
    const lastForNumbers = component.getLastFourNumbers(
      MOCK_TRANSACTION_FORM_DATA.card_number
    );

    expect(selectInputCardNumber[0].nativeElement.textContent).toContain(
      `${translateService.instant(
        TRANSACTION_FORM_VOCABULARY.selectLabel
      )} ${lastForNumbers}`
    );
  }));

  it('should retrive a message error on validate form fields', () => {
    const valueControl = component.transactionForm.get(fieldPropNameValue);
    const cardNumberControl = component.transactionForm.get(
      fieldPropNameCardNumber
    );

    expect(valueControl).toBeTruthy();
    expect(valueControl.invalid).toBeTruthy();

    expect(cardNumberControl).toBeTruthy();
    expect(cardNumberControl.valid).toBeTruthy();

    const valueFieldMessage = component.getErrorMessage(
      valueControl,
      fieldName
    );
    expect(valueFieldMessage).toContain(
      formControlValidatorService.getMinLengthErrorMessage(
        valueControl.errors.min.min,
        fieldName
      )
    );
  });
});
