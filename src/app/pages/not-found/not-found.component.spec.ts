import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundRoutingModule } from './not-found-routing.module';

describe('NotFoundRoutingModule', () => {
  let component: NotFoundRoutingModule;
  let fixture: ComponentFixture<NotFoundRoutingModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundRoutingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundRoutingModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
