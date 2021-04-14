import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { of } from 'rxjs/observable/of';


import { UsersComponent } from './users.component';
import { LoadingComponent } from '../../utils/loading/loading.component';
import { ModalComponent } from '../../utils/modal/modal.component';

import { UsersService } from './users.service';

import { User } from "./users.interface";

describe('UsersComponent', () => {
  let userService;
  let usersComponent;
  let fixture;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        CurrencyMaskModule
      ],
      declarations: [
        UsersComponent,
        LoadingComponent,
        ModalComponent
      ],
      providers: [UsersService]
    })
      .compileComponents();
  }));

  beforeEach(inject([UsersService], s => {
    userService = s;
    fixture = TestBed.createComponent(UsersComponent);
    usersComponent = fixture.componentInstance;
    element = fixture.nativeElement;
  }));


  it('should render title in a h4 tag', () => {
    fixture.detectChanges();
    const el = fixture.nativeElement;
    expect(el.querySelector('h4').textContent).toContain('Contatos');
  });

  it("should call getUsers and return list of users", async(() => {
    const response: User[] = [];

    spyOn(userService, 'getUsers').and.returnValue(of(response))

    usersComponent.getUsers();

    fixture.detectChanges();

    expect(usersComponent.userList).toEqual(response);
    
  }));
});
