import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User, userOneMock } from '@picpay-lib/ngx-domain';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;
  const oneUser: User = new User(userOneMock);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.user = oneUser;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

it('should emit the user then pay', () => {
    const spyEmitter = spyOn(component.payToUser, 'emit');
    component.pay();
    expect(spyEmitter).toHaveBeenCalledWith(oneUser);
  });
