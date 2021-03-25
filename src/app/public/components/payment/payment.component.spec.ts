import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ModalComponent } from '../../modal/modal.component';
import { CardComponent } from '../card/card.component';

import { PaymentComponent } from './payment.component';

const paymentValue = 0;

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, CurrencyMaskModule],
      declarations: [PaymentComponent, ModalComponent, CardComponent],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.paymentValue = paymentValue;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Testando o html do componente Payment
   */

  describe('checking content', () => {
    it('should contain value "R$ 0,00"', () => {
      fixture.detectChanges();
      let valueA = fixture.debugElement.query(By.css('.payment__value'))
        .nativeElement;
      expect(valueA.value).toContain('R$ 0,00');
    });

    it('should contain selected card "Cartão com final 1111"', () => {
      fixture.detectChanges();
      let card = fixture.debugElement.query(By.css('.payment__cards option'))
        .nativeElement;
      expect(card.innerText).toContain('Cartão com final 1111');
    });
  });

  /**
   * Testando o css do componente Payment
   */

  describe('checking css', () => {
    it('should have the class "payment__value"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.payment__value'));
      expect(el).toBeTruthy();
    });

    it('should have the class "payment__cards"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.payment__cards'));
      expect(el).toBeTruthy();
    });

    it('should have the class "payment__button"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.payment__button'));
      expect(el).toBeTruthy();
    });

    it('should have the class "button"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.button'));
      expect(el).toBeTruthy();
    });

    it('should have the class "button--medium"', () => {
      fixture.detectChanges();
      let el = fixture.debugElement.query(By.css('.button--medium'));
      expect(el).toBeTruthy();
    });
  });
});
