import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionResultComponent } from './transaction-result.component';

describe('TransactionResultComponent', () => {
  let component: TransactionResultComponent;
  let fixture: ComponentFixture<TransactionResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
