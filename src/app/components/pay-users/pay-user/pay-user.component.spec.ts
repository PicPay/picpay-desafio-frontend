import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayUserComponent } from './pay-user.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { PayUser } from './pay-user.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PayUserService } from 'src/app/services/pay-users.service';
import { HttpHandler, HttpClientModule } from '@angular/common/http';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';

describe('PayUserComponent', () => {
  let component: PayUserComponent;
  let fixture: ComponentFixture<PayUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayUserComponent, ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      imports: [ModalModule, HttpClientModule],
      providers:[PayUserService, HttpHandler, BsModalService, ComponentLoaderFactory, PositioningService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayUserComponent);
    component = fixture.componentInstance;
    let modal: BsModalRef = new BsModalRef();
    let user: PayUser = new PayUser(1,"Rafa","https://static.escolakids.uol.com.br/2019/07/lontra.jpg","rafahs");
    component.modalReference = modal;  
    component.payUser = user;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('create user', () => {
      expect(component.payUser).toEqual(new PayUser(1,"Rafa","https://static.escolakids.uol.com.br/2019/07/lontra.jpg","rafahs"))
  })


});
