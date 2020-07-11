import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMessageComponent } from './pay-message.component';

describe('PayMessageComponent', () => {
  let component: PayMessageComponent;
  let fixture: ComponentFixture<PayMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
