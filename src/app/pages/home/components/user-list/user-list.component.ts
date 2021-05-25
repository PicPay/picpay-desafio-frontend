import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/@shared/models/user.model';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
	animations: [
		trigger('listCard', [
			transition('* <=> *', [
				query(':enter',
					[style({ opacity: 0 }), stagger('400ms', animate('1000ms ease-in', style({ opacity: 1 })))],
					{ optional: true }
				)
			])
		])
	]
})

export class UserListComponent implements OnInit {
	@Input() users: User[] = [];
	@Output() selectedUser: EventEmitter<User> = new EventEmitter();

	constructor() { }

	ngOnInit() {
	}

	onClick(user: User): void {
		this.selectedUser.emit(user);
	}

}
