import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { of } from 'rxjs';
import { UserModel } from 'src/app/models/user-model';
import { UserService } from 'src/app/services/user.service';
import { UserComponent } from '../user/user.component';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: jasmine.SpyObj<UserService>;
  let users: UserModel[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        UserListComponent,
        UserComponent
      ],
      providers: [
        { provide: UserService, useFactory: () => spyOnClass(UserService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    userService = TestBed.get(UserService);
    component = fixture.componentInstance;

    users = [{
      id: 1,
      name: 'Flavio Lopes Duarte',
      username: 'duarte.flavio',
      img: 'https://randomuser.me/api/portraits/men/9.jpg'
    },{
      id: 1,
      name: 'Karoline Simões Baldotto Duarte',
      username: 'karolinesb',
      img: 'https://randomuser.me/api/portraits/women/9.jpg'
    },{
      id: 1,
      name: 'Dina Lopes Ferreira Duarte',
      username: 'duarte.dina',
      img: 'https://randomuser.me/api/portraits/women/6.jpg'
    }];
    userService.getUsers$.and.returnValue(of(users))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call UserService.getUsers$ when component starts', () => {
    expect(userService.getUsers$).toHaveBeenCalled();
  });

  it('should render users', () => {
    const renderedUsers = fixture.nativeElement.querySelectorAll('app-user')
    expect(renderedUsers.length).toBe(users.length);
  });
});
