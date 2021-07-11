import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from "rxjs";

import { UserService } from './user-list.service';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/interfaces/user.interface';

describe('UserService', () => {

    let http: HttpClient;
    let service: UserService;
    
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            HttpClientTestingModule
        ]
    }));
  
    it('should return the list of users', () => {

        const users_mock: IUser[] = [
            {"id":1001,"name":"Eduardo Santos","img":"https://randomuser.me/api/portraits/men/9.jpg","username":"@eduardo.santos"}
        ];

        http = TestBed.get(HttpClient);        
        service = TestBed.get(UserService);
        const spy = jasmine.createSpy('spy');

        spyOn(http, 'get').and.returnValue(of(users_mock));

        service.get().subscribe(spy);
        
        expect(spy).toHaveBeenCalledWith(users_mock);

        expect(http.get).toHaveBeenCalledWith(service.url);
    });

});
