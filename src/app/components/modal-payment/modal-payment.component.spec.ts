import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaymentComponent } from './modal-payment.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionService } from 'src/app/services/transaction.service';
import { of } from 'rxjs';

describe('ModalPaymentComponent', () => {
  let component: ModalPaymentComponent;
  let modal: MatDialog;
  let fixture: ComponentFixture<ModalPaymentComponent>;
  let transactionsService: TransactionService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPaymentComponent ],
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        NgxCurrencyModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { user: {
            name: "",
        }}},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    transactionsService = TestBed.get(TransactionService);
    modal = TestBed.get(MatDialog);
    fixture = TestBed.createComponent(ModalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('deve enviar a transação com cartão válido', () => {
    const openModal = spyOn(modal, 'open');
    spyOn(transactionsService, "payment").and.returnValue(of(null));
    component.formPayment.get('valuePay').setValue('100');
    component.formPayment.get('selectedCard').setValue({
      card_number: '1111111111111111',
      cvv: 789,
      expiry_date: '01/18',
    });


    component.transaction();
    expect(openModal).toHaveBeenCalled();
  });

  it('deve enviar a transação com cartão inválido', () => {
    const openModal = spyOn(modal, 'open');
    spyOn(transactionsService, "payment").and.returnValue(of(null));
    component.formPayment.get('valuePay').setValue('100');
    component.formPayment.get('selectedCard').setValue({
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    });


    component.transaction();
    expect(openModal).toHaveBeenCalled();
  });
});
