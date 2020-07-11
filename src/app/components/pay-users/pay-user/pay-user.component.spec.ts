import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayUserComponent } from './pay-user.component';

describe('PayUserComponent', () => {
  let component: PayUserComponent;
  let fixture: ComponentFixture<PayUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
