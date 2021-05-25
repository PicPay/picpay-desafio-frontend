import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/@shared/models/user.model';
import { UserService } from './../../../../@core/services/http/user.service';

@Injectable()
export class HomeResolve implements Resolve<User[]> {
	constructor(private userService: UserService) {}
	resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
		return this.userService.get();
	}
}