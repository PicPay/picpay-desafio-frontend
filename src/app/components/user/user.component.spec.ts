import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { User } from 'src/app/models/user';

import { UserComponent } from './user.component';
const user: User = {
  id: 1001,
  img: "https://randomuser.me/api/portraits/men/9.jpg",
  name: "Eduardo Santos",
  username: "@eduardo.santos"
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.user = user;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
