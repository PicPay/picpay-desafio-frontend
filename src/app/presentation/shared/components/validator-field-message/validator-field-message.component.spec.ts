import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorFieldMessageComponent } from './validator-field-message.component';

describe('ValidatorFieldMessageComponent', () => {
  let component: ValidatorFieldMessageComponent;
  let fixture: ComponentFixture<ValidatorFieldMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatorFieldMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorFieldMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
