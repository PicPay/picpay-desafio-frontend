import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalMessage } from './modal-message.component';

describe('ModalMessageComponent', () => {
  let component: ModalMessage;
  let fixture: ComponentFixture<ModalMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMessage ],
      providers: [ NgbActiveModal ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});