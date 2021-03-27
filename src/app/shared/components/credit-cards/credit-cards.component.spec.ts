import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardsComponent } from './credit-cards.component';

describe('CreditCardsComponent', () => {
  let component: CreditCardsComponent;
  let fixture: ComponentFixture<CreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreditCardsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
