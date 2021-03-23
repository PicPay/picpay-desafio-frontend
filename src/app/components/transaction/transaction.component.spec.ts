import { state } from '@angular/animations';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { TransactionMockService } from 'src/app/mocks/transaction.service.mock';
import { Card } from 'src/app/models/card';
import { TransactionPayload } from 'src/app/models/transaction-payload';
import { TransactionStage } from 'src/app/models/transaction-state';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { TransactionResultComponent } from '../transaction-result/transaction-result.component';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TransactionComponent,
        TransactionResultComponent
      ],
      providers: [ 
        {  provide: TransactionService, useClass: TransactionMockService },
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;

    const mockedCards = [
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

    component.cards = mockedCards;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should exist an pay method', () => {
    expect(component.pay).toBeTruthy();
  });

  it( 'should not process transaction on pay method when card number is "4111111111111234" and form is valid', () => {
    const mockCard: Card = {
      card_number: '4111111111111234',
      cvv: 123,
      expiry_date: '01/20',
    };

    const transactionService = TestBed.get(TransactionService);
    const spy = spyOn(transactionService, 'completeTransactionFailed');

    component.transactionForm.get('value').setValue(1);
    fixture.detectChanges();

    component.pay();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
