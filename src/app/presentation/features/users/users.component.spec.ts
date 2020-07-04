import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { UserModule, DialogService } from '../../shared/components';
import { IUsersUsecase } from 'src/app/core/interface';
import { of } from 'rxjs';
import { UserEntity } from '../../../core/entities/user-entity';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersUsecase: jasmine.SpyObj<IUsersUsecase>;
  let dialogService: DialogService;

  beforeEach(async(() => {
    const spyDialogService = jasmine.createSpyObj('DialogService', ['openPayment']);

    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        UserModule
      ],
      providers: [
        { provide: IUsersUsecase, useValue: {
          get() {
            const users = [new UserEntity(), new UserEntity(), new UserEntity()];

            return of(users);
          }
        } },
        { provide: DialogService, useValue: spyDialogService }
      ]
    })
    .compileComponents();

    usersUsecase = TestBed.get(IUsersUsecase);
    dialogService = TestBed.get(DialogService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    usersUsecase.get().subscribe((res: UserEntity[]) => {
      expect(res).toBeTruthy();
      expect(res.length).toBe(3);
      expect(res).toEqual(jasmine.any(Array));
      expect(component.isLoading).toBeFalsy();
      expect(component.users.length).toBe(3);
    });

    expect(component).toBeTruthy();
  });

  it('should open payment', () => {
    const user = new UserEntity();

    component.openPayment(user);

    expect(dialogService.openPayment).toHaveBeenCalled();
  });
});
