import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';
import { HttpService } from 'src/app/core/http.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { httpServiceStub } from 'src/mock/tests/http-service';
import { MatDialogMock } from 'src/mock/tests/mat-dialog-stub';
import { usersStub } from 'src/mock/tests/users-stub';
import { HomeService } from '../services/home.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, SharedModule, BrowserAnimationsModule],
      declarations: [ HomeComponent ],
      providers: [HomeService, {provide: MatDialog, useClass: MatDialogMock}, {provide: HttpService, useValue: httpServiceStub}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render users when service was called', async () => {
    const getUsers =  jest.spyOn(component.homeService, 'getUsersList').mockReturnValue(of(usersStub));
    component.ngOnInit();
    expect(getUsers).toHaveBeenCalledTimes(1);
    expect(component.usersList.data).toHaveLength(usersStub.length);
  });

  it('should not render users when service was called and throws error', async () => {
    component.homeService.getUsersList = jest.fn(() => throwError(
      new HttpErrorResponse({status: 400, error: {message: 'This is an error'}})
    ));
    try {
      component.ngOnInit();
    } catch (error) {
      expect(component.homeService.getUsersList).toHaveBeenCalledTimes(1);
      expect(component.usersList).toBe(null);
    }
  });

});
