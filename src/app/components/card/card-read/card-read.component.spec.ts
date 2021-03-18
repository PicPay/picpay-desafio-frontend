import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReadComponent } from './card-read.component';

describe('CardReadComponent', () => {
  let component: CardReadComponent;
  let fixture: ComponentFixture<CardReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
