import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPicPayService } from '@mocks/MockPicPayService';
import { PicPayService } from '@services/picpay.service';
import { MomentModule } from 'ngx-moment';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { CardPaymentComponent } from './card-payment.component';

describe('CardPaymentComponent', () => {
  let component: CardPaymentComponent;
  let fixture: ComponentFixture<CardPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardPaymentComponent],
      imports: [RouterTestingModule, MomentModule, NgxSkeletonLoaderModule],
      providers: [{ provide: PicPayService, useClass: MockPicPayService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPaymentComponent);
    component = fixture.componentInstance;

    component.payment = {
      id: 1,
      date: new Date(),
      destination_user_id: 1,
      last_card_number: '1234',
      value: 100,
      comment: 'Test comment',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create snapshot with payment', () => {
    expect(fixture).toMatchSnapshot('with_payment');
  });

  it('should create snapshot without payment', () => {
    component.payment = null;

    component.ngOnInit();
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot('without_payment');
  });

  it('test load user on init', () => {
    expect(component.user.id).toEqual(1);
    expect(component.user.name).toEqual('Test 1');
    expect(component.user.username).toEqual('@test1');
  });
});
