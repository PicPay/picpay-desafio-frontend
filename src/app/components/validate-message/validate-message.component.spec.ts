import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ValidateMessage } from './validate-message.component';

describe('ValidateMessageComponent', () => {
  let component: ValidateMessage;
  let fixture: ComponentFixture<ValidateMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateMessage ],
      providers: [ NgbActiveModal ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to be defined where component is called', () => {
    expect(component.text).toBeDefined()
  });
});