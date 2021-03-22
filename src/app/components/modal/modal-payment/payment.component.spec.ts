import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MockPipe } from 'ng-mocks';
import { FormatCard } from 'src/app/pipes/formatCard.pipe';
import { HomeComponent } from '../../home/home.component';
import { ValidateMessage } from '../../validate-message/validate-message.component';

import { PaymentComponent } from './payment.component';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent, HomeComponent, ValidateMessage, MockPipe(FormatCard) ],
      providers: [ NgbActiveModal ],
      imports: [     
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});