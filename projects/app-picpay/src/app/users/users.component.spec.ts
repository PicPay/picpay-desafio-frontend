import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxSkeletonUserCardModule, NgxUserCardModule } from '@picpay-lib/ngx-component';
import { User, userOneMock, userTwoMock } from '@picpay-lib/ngx-domain';
import { UserService } from '@picpay-lib/ngx-service';
import { of } from 'rxjs';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [HttpClientTestingModule, NgxUserCardModule, NgxSkeletonUserCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    userService = TestBed.inject(UserService);
    spyOn(userService, 'getList').and.returnValue(of([new User(userOneMock), new User(userTwoMock)]));

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should repeat 10 times', () => {
    expect(component.repeater(10).length).toEqual(10);
  });
});
