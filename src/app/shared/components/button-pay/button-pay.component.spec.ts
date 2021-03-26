import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPayComponent } from './button-pay.component';

describe('ButtonPayComponent', () => {
  let component: ButtonPayComponent;
  let fixture: ComponentFixture<ButtonPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPayComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
