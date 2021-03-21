import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from 'src/app/services/modal.service';
import { spyOnClass } from 'jasmine-es6-spies';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let modalService: jasmine.SpyObj<ModalService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers: [
        { provide: ModalService, useFactory: () => spyOnClass(ModalService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    modalService = TestBed.get(ModalService)
    component = fixture.componentInstance;

    component.user = {
      id: 1,
      name: 'Flavio Lopes Duarte',
      username: 'duarte.flavio',
      img: 'https://randomuser.me/api/portraits/men/9.jpg'
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ModalService.open when "Pagar" button is clicked', () => {
    const button = fixture.nativeElement.querySelector('.pay-button');

    button.click();

    expect(modalService.open).toHaveBeenCalled();
  });
});
