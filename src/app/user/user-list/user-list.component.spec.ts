import {Component, Input} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MatDividerModule, MatProgressSpinnerModule} from '@angular/material';
import {of} from 'rxjs';
import {User} from 'src/app/shared/models/user.model';
import {UserService} from 'src/app/shared/services/user/user.service';

import {UserListComponent} from './user-list.component';

@Component({ selector: 'app-user-list-item', template: '' })
class UserListItemStubComponent {
  @Input() user: User;
}

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  const testUsers = [
    {
      id: 0,
      name: 'Test User 1',
      username: '@test-user-1',
      img: 'test-user-1-image-path',
    },
    {
      id: 1,
      name: 'Test User 2',
      username: '@test-user-2',
      img: 'test-user-2-image-path',
    },
  ];

  beforeEach(async(() => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['getUsers']);

    userServiceSpy.getUsers.and.returnValue(of(testUsers));

    TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule, MatDividerModule],
      declarations: [UserListComponent, UserListItemStubComponent],
      providers: [{ provide: UserService, useValue: userServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserService#getUsers', () => {
    expect(userServiceSpy.getUsers.calls.count()).toBe(1, 'one call');
  });

  it('should display the correct amount of User List Item Components', () => {
    const listItems = fixture.nativeElement.querySelectorAll(
      'app-user-list-item'
    );

    expect(listItems.length).toBe(testUsers.length, 'same length');
  });
});
