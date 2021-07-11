import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMessageComponent } from './simple-message.component';

describe('SimpleMessageComponent', () => {
  let component: SimpleMessageComponent;
  let fixture: ComponentFixture<SimpleMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
