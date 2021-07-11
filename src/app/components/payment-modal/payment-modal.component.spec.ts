import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from "rxjs";

import { PaymentModalComponent } from './payment-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { IUser } from 'src/app/interfaces/user.interface';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { HttpClient } from '@angular/common/http';
import { ITransactionPayload } from 'src/app/interfaces/transaction-payload.interface';
import { ICard } from 'src/app/interfaces/card.interface';
import { IResponseModal } from 'src/app/interfaces/response-modal.interface';

describe('PaymentModalComponent', () => {
  let component: PaymentModalComponent;
  let fixture: ComponentFixture<PaymentModalComponent>;

  let http: HttpClient;
  let service: PaymentService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
          PaymentModalComponent,
         ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        NgxCurrencyModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModalComponent);
    component = fixture.componentInstance;

    const mockUser: IUser = {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    component.user = mockUser;

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header', () => {
    const header = 'Pagamento para ' + component.user.name;

    expect(fixture.nativeElement.querySelector('[data-test=header]').innerText).toEqual(header);
  });

  it('should have an image', () => {
    expect(fixture.nativeElement.querySelector('[data-test=image]').src).toEqual(component.user.img);
  });

  it('should have a name', () => {
    expect(fixture.nativeElement.querySelector('[data-test=name]').innerText).toEqual(component.user.name);
  });

  it('should have a username', () => {
    expect(fixture.nativeElement.querySelector('[data-test=username]').innerText).toEqual(component.user.username);
  });

  it('should have an id', () => {
      const id = 'ID: ' + component.user.id;
    expect(fixture.nativeElement.querySelector('[data-test=id]').innerText).toEqual(id);
  });

  it('should have an input', () => {
      expect(fixture.nativeElement.querySelector('[data-test=input]')).toBeTruthy();
  });

  it('should have a select', () => {
      expect(fixture.nativeElement.querySelector('[data-test=select]')).toBeTruthy();
  });

  it('should have a button', () => {
      expect(fixture.nativeElement.querySelector('[data-test=button]')).toBeTruthy();
  });

  it('should render the button label', () => {
      expect(fixture.nativeElement.querySelector('[data-test=button]').innerText).toEqual(component.labelBtnPay);
  });

  it('should emit a response object after submitting a payment', () => {
    const mockResponse: IResponseModal = {
        "success": true,
        "status": "Aprovada"
    }

    const mockCard: ICard = {
        card_number: '1111111111111111',
        cvv: 789,
        expiry_date: '01/18',
    }

    const payload: ITransactionPayload = {
        destination_user_id: component.user.id,
        card_number: mockCard.card_number,
        cvv: mockCard.cvv,
        expiry_date: mockCard.expiry_date,
        value: 0.01, //Valid value
    }

    http = TestBed.get(HttpClient)
    service = TestBed.get(PaymentService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'post').and.returnValue(of(mockResponse));
    service.post(payload).subscribe(spy)
    fixture.detectChanges()
    
    spyOn(component.payment, 'emit');

    //starts payment
    component.pay();
 
    fixture.detectChanges();

    expect(component.payment.emit).toHaveBeenCalledWith(mockResponse);
  });


});
