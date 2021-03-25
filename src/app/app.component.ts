import { Component } from '@angular/core';
import { User } from './shared/user.model';
import { UserService } from './shared/user.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Desafio Picpay Front-end';
    users: User[];
    usersCount: number;

    constructor(private userService: UserService) {
        this.loadUsersFromPage(0);
    }

    loadUsersFromPage(page: number): void {
        this.userService.getUsers(page).subscribe((response: { count: number, results: User[] }) => {
            this.usersCount = response.count;
            this.users = response.results;
        });
    }

    onChangePage(pageEvent: PageEvent): void {
        this.loadUsersFromPage(pageEvent.pageIndex);
    }
}
