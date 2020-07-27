import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { PaymentComponent } from './payment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Transaction } from 'src/app/models/transaction.model';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule, NgxCurrencyModule],
      providers: [NgbActiveModal],
      declarations: [PaymentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create and send request to backEnd',
    inject([TransactionService], (TransactionService: TransactionService) => {     
      const transaction: Transaction = new Transaction(
        '9999999999999999',
        123,
        '01/18',
        789,
        1
      );
      expect(TransactionService.create(transaction)
        .subscribe(
          (process) => {
            console.log(process)
          }
        )).toBeTruthy();
    }))
});
