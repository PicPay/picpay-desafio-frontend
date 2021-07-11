import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from "rxjs";

import { UserListComponent } from './user-list.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user-list/user-list.service';
import { IUser } from 'src/app/interfaces/user.interface';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  let http: HttpClient;
  let service: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list', () => {
      expect(fixture.nativeElement.querySelector('[data-test="list"]')).toBeTruthy();
  });

  it('should have a list-item', () => {

    const mockUserList: IUser[] = [
      {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    ];      
    http = TestBed.get(HttpClient)
    service = TestBed.get(UserService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'get').and.returnValue(of(mockUserList));
    service.get().subscribe(spy => component.users = spy)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelectorAll('[data-test=list-item]').length).toBe(mockUserList.length);
      
  });

  it('should have a list-image', () => {

    const mockUserList: IUser[] = [
      {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    ];      
    http = TestBed.get(HttpClient)
    service = TestBed.get(UserService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'get').and.returnValue(of(mockUserList));
    service.get().subscribe(spy => component.users = spy)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelectorAll('[data-test=list-image]').length).toBe(mockUserList.length);
  });

  it('should have a list-name', () => {

    const mockUserList: IUser[] = [
      {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    ];      
    http = TestBed.get(HttpClient)
    service = TestBed.get(UserService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'get').and.returnValue(of(mockUserList));
    service.get().subscribe(spy => component.users = spy)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelectorAll('[data-test=list-name]').length).toBe(mockUserList.length);
  });

  it('should have a list-username', () => {

    const mockUserList: IUser[] = [
      {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    ];      
    http = TestBed.get(HttpClient)
    service = TestBed.get(UserService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'get').and.returnValue(of(mockUserList));
    service.get().subscribe(spy => component.users = spy)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelectorAll('[data-test=list-username]').length).toBe(mockUserList.length);
  });

  it('should have a list-button', () => {

    const mockUserList: IUser[] = [
      {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    ];      
    http = TestBed.get(HttpClient)
    service = TestBed.get(UserService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'get').and.returnValue(of(mockUserList));
    service.get().subscribe(spy => component.users = spy)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelectorAll('[data-test=list-button]').length).toBe(mockUserList.length);
  });

  it('should render the button label', () => {

    const mockUserList: IUser[] = [
      {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    ];      
    http = TestBed.get(HttpClient)
    service = TestBed.get(UserService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'get').and.returnValue(of(mockUserList));
    service.get().subscribe(spy => component.users = spy)
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('[data-test=list-button]').innerText).toEqual(component.labelBtnPay);
  });

  it('should emit user on click', () => {

    const mockUserList: IUser[] = [
      {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
    ];      
    http = TestBed.get(HttpClient)
    service = TestBed.get(UserService)
    const spy = jasmine.createSpy('spy')

    spyOn(http, 'get').and.returnValue(of(mockUserList));
    service.get().subscribe(spy => component.users = spy)

    fixture.detectChanges()
    
    // spy on event emitter 
    spyOn(component.emitUserEvent, 'emit');
 
    // trigger the click
    const button = fixture.nativeElement.querySelector('[data-test=list-button]');
    button.dispatchEvent(new Event('click'));
 
    fixture.detectChanges();
 
    expect(component.emitUserEvent.emit).toHaveBeenCalledWith(mockUserList[0]);
 });


});
