import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { LoadingModule } from 'src/app/components/loading/loading.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { customNgxToastrConfig } from 'src/app/configs/ngx-toastr';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [BsModalService, BsModalRef],
      imports: [
        LoadingModule,
        PaginationModule,
        HttpClientModule,
        ModalModule.forRoot(),
        ToastrModule.forRoot(customNgxToastrConfig),
      ],
      declarations: [HomePageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
