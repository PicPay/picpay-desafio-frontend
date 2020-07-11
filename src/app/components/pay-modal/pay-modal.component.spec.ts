import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayModalComponent } from './pay-modal.component';

describe('PayModalComponent', () => {
  let component: PayModalComponent;
  let fixture: ComponentFixture<PayModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
