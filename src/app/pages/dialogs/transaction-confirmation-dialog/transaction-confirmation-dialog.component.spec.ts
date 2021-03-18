import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionConfirmationDialogComponent } from './transaction-confirmation-dialog.component';

describe('TransactionConfirmationDialogComponent', () => {
  let component: TransactionConfirmationDialogComponent;
  let fixture: ComponentFixture<TransactionConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
