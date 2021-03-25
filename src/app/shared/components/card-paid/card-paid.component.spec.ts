import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPaidComponent } from './card-paid.component';

describe('CardPaidComponent', () => {
  let component: CardPaidComponent;
  let fixture: ComponentFixture<CardPaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardPaidComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
