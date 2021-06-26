import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardListComponent } from './creditcard-list.component';

describe('CreditcardListComponent', () => {
  let component: CreditcardListComponent;
  let fixture: ComponentFixture<CreditcardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditcardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditcardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
