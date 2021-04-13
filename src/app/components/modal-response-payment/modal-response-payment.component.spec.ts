import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResponsePaymentComponent } from './modal-response-payment.component';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ModalResponsePaymentComponent', () => {
  let component: ModalResponsePaymentComponent;
  let fixture: ComponentFixture<ModalResponsePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalResponsePaymentComponent ],
      imports: [ MatDialogModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { user: {
            name: "",
        }}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalResponsePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});