import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoutingModule } from './home-routing.module';

describe('HomeRoutingModule', () => {
  let component: HomeRoutingModule;
  let fixture: ComponentFixture<HomeRoutingModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeRoutingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRoutingModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
