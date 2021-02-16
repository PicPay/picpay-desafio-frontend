import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalRef } from '../../modal-ref';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  const mockModalRef = { close: () => false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalComponent
      ],
      providers: [
        {
          provide: ModalRef,
          useValue: mockModalRef,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
