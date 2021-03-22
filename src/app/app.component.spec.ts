import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatCardModule} from '@angular/material';
import {AppComponent} from './app.component';

@Component({ selector: 'app-user-list', template: '' })
class UserListStubComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule],
      declarations: [AppComponent, UserListStubComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
