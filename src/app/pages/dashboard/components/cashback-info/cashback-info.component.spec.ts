import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbackInfoComponent } from './cashback-info.component';

describe('CashbackInfoComponent', () => {
  let component: CashbackInfoComponent;
  let fixture: ComponentFixture<CashbackInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbackInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbackInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
