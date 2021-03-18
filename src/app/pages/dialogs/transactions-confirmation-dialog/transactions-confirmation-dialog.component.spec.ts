import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsConfirmationDialogComponent } from './transactions-confirmation-dialog.component';

describe('TransactionConfirmationDialogComponent', () => {
  let component: TransactionsConfirmationDialogComponent;
  let fixture: ComponentFixture<TransactionsConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
