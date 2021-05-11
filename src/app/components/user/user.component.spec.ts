import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from 'src/app/models/user';

import { UserComponent } from './user.component';
const user: User = {
  id: 1001,
  img: 'https://randomuser.me/api/portraits/men/9.jpg',
  name: 'Eduardo Santos',
  username: '@eduardo.santos'
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });


  it('should create', () => {
    component.user = user;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render name', () => {
    component.user = user;
    fixture.detectChanges();
    expect(de.query(By.css('.user__name')).nativeElement.innerText).toBe(user.name);
  });

  it('should render username', () => {
    component.user = user;
    fixture.detectChanges();
    expect(de.query(By.css('.user__username')).nativeElement.innerText).toBe(user.username);
  });

});
