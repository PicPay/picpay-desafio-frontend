import { Overlay } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from '../../models/user.interface';

import { CardUserComponent } from './card-user.component';

describe('CardUserComponent', () => {
  let testHostComponent: AppTestHostComponent;
  let testHostFixture: ComponentFixture<AppTestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardUserComponent, AppTestHostComponent
      ],
      providers: [
        Overlay
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(AppTestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should show the user info', () => {
    expect(testHostFixture.nativeElement.querySelector('.user-name').innerText).toEqual('Eduardo Santos');
    expect(testHostFixture.nativeElement.querySelector('.user-id-username').innerText).toEqual('ID: 1001 - @eduardo.santos');
    expect(testHostFixture.nativeElement.querySelector('img').src).toEqual('https://randomuser.me/api/portraits/men/9.jpg');
  });

  @Component({
    selector: `app-host-component`,
    template: `<app-card-user [user]="user"></app-card-user>`
  })
  class AppTestHostComponent {
    user: User = {
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      username: '@eduardo.santos',
      id: 1001,
      name: 'Eduardo Santos',
    };
  }
});
