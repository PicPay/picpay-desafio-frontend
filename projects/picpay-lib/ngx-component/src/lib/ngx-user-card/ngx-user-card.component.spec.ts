import { ComponentFixture, TestBed } from '@angular/core/testing';
import { User, userOneMock } from '@picpay-lib/ngx-domain';
import { NgxUserCardComponent } from './ngx-user-card.component';

describe('UserCardComponent', () => {
  let component: NgxUserCardComponent;
  let fixture: ComponentFixture<NgxUserCardComponent>;
  const oneUser: User = new User(userOneMock);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxUserCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUserCardComponent);
    component = fixture.componentInstance;
    component.user = oneUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the user then pay', () => {
    const spyEmitter = spyOn(component.payToUser, 'emit');
    component.pay();
    expect(spyEmitter).toHaveBeenCalledWith(oneUser);
  });
});
