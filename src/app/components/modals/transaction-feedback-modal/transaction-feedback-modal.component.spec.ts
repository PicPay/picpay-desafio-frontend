import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFeedbackModalComponent } from './transaction-feedback-modal.component';

describe('TransactionFeedbackModalComponent', () => {
  let component: TransactionFeedbackModalComponent;
  let fixture: ComponentFixture<TransactionFeedbackModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionFeedbackModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFeedbackModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
