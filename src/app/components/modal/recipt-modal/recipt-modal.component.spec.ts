import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptModalComponent } from './recipt-modal.component';

describe('ReciptModalComponent', () => {
  let component: ReciptModalComponent;
  let fixture: ComponentFixture<ReciptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
