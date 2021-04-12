import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPaymentModalComponent } from './status-payment-modal.component';

describe('StatusPaymentModalComponent', () => {
  let component: StatusPaymentModalComponent;
  let fixture: ComponentFixture<StatusPaymentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPaymentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
