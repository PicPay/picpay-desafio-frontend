import { DebugElement } from '@angular/core';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed
} from '@angular/core/testing';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { FormControlValidatorService } from '@core/services/form-control-validator/form-control-validator.service';
import { MOCK_TRANSACTION_FORM_DATA } from '@shared/mocks/transaction/transaction-form.mock';
import { SharedModule } from '@shared/shared.module';
import {
  TransactionForm,
  TransactionFormModalComponent
} from './transaction-form-modal.component';

describe('TransactionFormModalComponent', () => {
  let component: TransactionFormModalComponent;
  let fixture: ComponentFixture<TransactionFormModalComponent>;
  let debugElement: DebugElement;

  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<TransactionForm>>;

  beforeEach(async(() => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', [
      'close',
      'afterClosed',
    ]);
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: MOCK_TRANSACTION_FORM_DATA },
      ],
    })
      .compileComponents()
      .then(() => {
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
    expect(component.transactionForm.get('value')).toBeTruthy();
    expect(component.transactionForm.get('card_number')).toBeTruthy();

    expect(component.transactionForm.get('value').value).toBe(
      MOCK_TRANSACTION_FORM_DATA.value
    );
    expect(component.transactionForm.get('card_number').value).toBe(
      MOCK_TRANSACTION_FORM_DATA.card_number
    );

    const inputValue = debugElement.queryAll(By.css('input'));
    expect(inputValue[0].attributes.formControlName).toEqual('value');

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
      `com final ${lastForNumbers}`
    );
  }));

  it('should retrive a message error on validate form fields', () => {
    const formControlValidatorService = new FormControlValidatorService();

    const valueControl = component.transactionForm.get('value');
    const cardNumberControl = component.transactionForm.get('card_number');

    expect(valueControl).toBeTruthy();
    expect(valueControl.invalid).toBeTruthy();

    expect(cardNumberControl).toBeTruthy();
    expect(cardNumberControl.valid).toBeTruthy();

    const valueFieldMessage = component.getErrorMessage(valueControl, 'Valor');
    expect(valueFieldMessage).toContain(
      formControlValidatorService.getMinLengthErrorMessage(
        valueControl.errors.min.min,
        'Valor'
      )
    );
  });
});
