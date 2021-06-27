import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPaymentResponseComponent } from './modal-payment-response.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ModalPaymentResponseComponent', () => {
  let component: ModalPaymentResponseComponent;
  let fixture: ComponentFixture<ModalPaymentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPaymentResponseComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            user: {
              name: '',
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPaymentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should be create', () => {
    expect(component).toBeTruthy();
  });
});
