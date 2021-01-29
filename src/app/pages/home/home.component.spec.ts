import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { UserRowComponent } from 'src/app/components/user-row/user-row.component';
import { AvatarComponent } from 'src/app/components/avatar/avatar.component';
import { IApi } from 'src/app/interfaces/api.interface';
import { ApiMockService } from 'src/app/services/api/api-mock.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.overrideComponent(
      HomeComponent,
      {set: {providers: [{provide: IApi, useClass: ApiMockService}]}}
    );
    TestBed.configureTestingModule({
      declarations: [ HomeComponent,UserRowComponent,AvatarComponent ]
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
});
